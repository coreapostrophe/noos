use std::net::TcpListener;

use serverlib::Server;

fn spawn_app() {
    let listener = TcpListener::bind("127.0.0.1:0").expect("Failed to bind to a random port");
    let server = Server::init(listener);
    let _ = tokio::spawn(server);
}

#[tokio::test]
async fn health_check_works() {
    spawn_app();
}
