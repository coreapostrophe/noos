use serverlib::{error::ServerError, server::Server};
use std::net::SocketAddr;
use tokio::net::TcpListener;

struct TestApp {
    socket_address: SocketAddr,
}

async fn spawn_app<'a>() -> Result<TestApp, ServerError> {
    let listener = TcpListener::bind(("127.0.0.1", 0))
        .await
        .expect("Failed to bind to a random port.");
    let socket_address = listener
        .local_addr()
        .expect("Failed to get socket address.");

    let _ = tokio::spawn(async move { Server::init(listener).await });

    Ok(TestApp { socket_address })
}

#[tokio::test]
async fn health_check_works() {
    let test_app = spawn_app().await.expect("Failed to spawn app.");
    let client = reqwest::Client::new();

    let response = client
        .get(&format!(
            "http://{}/health_check",
            test_app.socket_address.to_string()
        ))
        .send()
        .await
        .expect("Failed to execute request.");

    assert!(response.status().is_success());
    assert_eq!(Some(0), response.content_length());
}
