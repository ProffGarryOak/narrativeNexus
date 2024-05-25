import React from "react";
import logo from "./logo.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import bk1 from "./bk1.png";
import bk2 from "./bk2.png";
import bk3 from "./bk3.png";
import bk4 from "./bk4.png";
import "./App.css";

function App() {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand fontfancy" href="/">
						<img src={logo} alt="Bootstrap" width="60" height="48" />
						Narrative Nexus
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<form className="d-flex me-auto position-relative" role="search">
							<button className="btn search-icon-button" type="submit">
								<i className="bi bi-search"></i>
							</button>
							<input
								className="form-control search-input"
								type="search"
								placeholder="Search..."
								aria-label="Search"
							/>
						</form>
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item me-2">
								<a className="nav-link active" aria-current="page" href="/">
									<button
										type="button"
										className="btn btn-dark rectangular-btn"
									>
										BrowseCommunity
									</button>
								</a>
							</li>
							<li className="nav-item me-2">
								<a className="nav-link" href="/">
									<button
										type="button"
										className="btn btn-light rectangular-btn"
									>
										Login
									</button>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									<button
										type="button"
										className="btn btn-light rectangular-btn"
									>
										Signup
									</button>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* part 1 */}
			<div className="container text-center my-5">
				<img src={img1} alt="Image 1" className="circle-image" />

				<h1 className="mt-4 fontfancy">Welcome to Narrative-Nexus</h1>
				<p className="lead txtstyle">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum error
					dignissimos corporis saepe tenetur sapiente, eius autem inventore
					molestias similique dolores! Corrupti impedit atque hic minus
					reprehenderit explicabo, ullam tenetur quo culpa expedita recusandae
					repellendus iure voluptatem blanditiis sed suscipit molestiae ut ea
					veritatis, placeat ducimus voluptatibus. Quasi nobis hic asperiores
					quod, quia reiciendis corporis similique consectetur illum impedit in.
				</p>
				<div className="button-group mt-3">
					<div className="d-grid gap-2 d-md-block ">
						<button className="btn btn-dark joinbtn" type="button">
							Join as Reader
						</button>
						<button className="btn btn-dark joinbtn" type="button">
							Join as Writer
						</button>
					</div>
				</div>
			</div>

			{/* part 2 */}
			<div>
				<div className="container text-center my-5 d-flex justify-content-center align-items-center flex-wrap">
					<img src={img2} alt="Image 1" className="image2" />

					<div className="text-container">
						<h1 className="mt-4 fontfancy">How it works?</h1>
						<p className="lead txtstyle">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
							consequatur sapiente commodi voluptate, minima inventore et
							possimus nobis maxime, beatae quos saepe quasi iusto
							exercitationem!
						</p>
						<p className="lead txtstyle">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
							accusantium adipisci ipsam aut, assumenda tempora quo iste ratione
							ad rerum sint corporis vel voluptatum alias? 2
						</p>
					</div>
				</div>
			</div>
			{/* part 3 */}
			<div className="container text-center my-5 d-flex">
				<div className="text-container2">
					<h1 className="mt-4 fontfancy">Explore Stories</h1>
					<p className="lead txtstyle">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						consequatur sapiente commodi voluptate, minima inventore et possimus
						nobis maxime, beatae quos saepe quasi iusto exercitationem!
					</p>
				</div>
			</div>

			<div
				id="carouselExampleFade"
				className="carousel slide carousel-fade"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={bk1} className="d-block mx-auto" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={bk2} className="d-block mx-auto" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={bk3} className="d-block mx-auto" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={bk4} className="d-block mx-auto" alt="..." />
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div className="container container3 text-center my-5 d-flex justify-content-center align-items-center flex-wrap">
				<div className="text-container">
					<h1 className="mt-4 fontfancy">Community</h1>
					<p className="lead txtstyle">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						consequatur sapiente commodi voluptate, minima inventore et possimus
						nobis maxime, beatae quos saepe quasi iusto exercitationem!
					</p>
					<div className="button-group mt-3">
						<div className="d-grid gap-2 d-md-block ">
							<button className="btn btn-dark joinbtn" type="button">
								Browse Community
							</button>
						</div>
					</div>
				</div>
				<img src={img3} alt="Image 1" className="image3" />
			</div>
		</>
	);
}

export default App;
