use app::App;

mod app;

#[tokio::main]
async fn main() -> Result<(), std::io::Error> {
    tracing_subscriber::fmt::init();

    App::init().await;

    Ok(())
}
