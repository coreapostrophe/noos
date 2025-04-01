use serverlib::{Server, error::ServerError};

#[tokio::main]
async fn main() -> Result<(), ServerError> {
    tracing_subscriber::fmt::init();

    Server::init(("0.0.0.0", 8000)).await?;

    Ok(())
}
