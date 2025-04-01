use thiserror::Error;

#[derive(Error, Debug)]
pub enum ServerError {
    #[error("Unable to bind address.")]
    Binding,
    #[error("Unable to parse server address string")]
    AddressParsing(#[from] std::net::AddrParseError),
    #[error("An IO error occured: {0}")]
    Io(#[from] std::io::Error),
}
