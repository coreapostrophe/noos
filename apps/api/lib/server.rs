use axum::{Router, http::StatusCode, routing::get};
use error::ServerError;
use std::net::TcpListener as StdTcpListener;
use tokio::net::TcpListener;

pub mod error;

pub enum BindOption<'a> {
    SocketAddress((&'a str, u16)),
    Listener(StdTcpListener),
}

impl<'a> From<(&'a str, u16)> for BindOption<'a> {
    fn from(value: (&'a str, u16)) -> Self {
        Self::SocketAddress(value)
    }
}

impl<'a> From<StdTcpListener> for BindOption<'a> {
    fn from(value: StdTcpListener) -> Self {
        Self::Listener(value)
    }
}

pub struct Server;

impl Server {
    pub async fn init<'a>(bind_option: impl Into<BindOption<'a>>) -> Result<(), ServerError> {
        let app = Router::new().route("/health_check", get(health_check));

        let bind_option: BindOption = bind_option.into();

        let listener = match bind_option {
            BindOption::Listener(listener) => TcpListener::from_std(listener)?,
            BindOption::SocketAddress(socket_address) => TcpListener::bind(socket_address).await?,
        };

        axum::serve(listener, app).await?;

        Ok(())
    }
}

async fn health_check() -> StatusCode {
    StatusCode::OK
}
