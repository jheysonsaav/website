// Copyright (C) Jheyson Saavedra ~ All right reserved.
mod routes;

use actix_web::{middleware, App, HttpServer};
use std::env;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Get host and port envs
    let host: String = String::from("0.0.0.0");
    let port: u16 = env::var("PORT")
        .unwrap_or(String::from("8080"))
        .parse()
        .expect("port is not valid");

    HttpServer::new(|| {
        App::new()
            .wrap(middleware::DefaultHeaders::new().header("Cache-Control", "max-age=31536000"))
            .service(actix_files::Files::new("/static", "static/").show_files_listing())
            .service(routes::home::home_route)
            .service(routes::error404::error404_route)
    })
    .bind((host, port))?
    .run()
    .await
}
