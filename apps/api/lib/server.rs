use axum::{Router, routing::get};
use tokio::net::TcpListener;

use crate::{error::ServerError, routes::health_check::health_check};

pub enum BindOption<'a> {
    SocketAddressString(&'a str),
    SocketAddress((&'a str, u16)),
    Listener(TcpListener),
}

impl<'a> From<&'a str> for BindOption<'a> {
    fn from(value: &'a str) -> Self {
        Self::SocketAddressString(value)
    }
}

impl<'a> From<(&'a str, u16)> for BindOption<'a> {
    fn from(value: (&'a str, u16)) -> Self {
        Self::SocketAddress(value)
    }
}

impl From<TcpListener> for BindOption<'_> {
    fn from(value: TcpListener) -> Self {
        Self::Listener(value)
    }
}

pub struct Server;

impl Server {
    pub async fn init<'a>(bind_option: impl Into<BindOption<'a>>) -> Result<(), ServerError> {
        let router = Router::new().route("/health_check", get(health_check));
        let bind_option = bind_option.into() as BindOption;
        let listener = match bind_option {
            BindOption::Listener(listener) => listener,
            BindOption::SocketAddress(socket_address) => TcpListener::bind(socket_address).await?,
            BindOption::SocketAddressString(socket_address_string) => {
                TcpListener::bind(socket_address_string).await?
            }
        };

        axum::serve(listener, router).await?;

        Ok(())
    }
}
