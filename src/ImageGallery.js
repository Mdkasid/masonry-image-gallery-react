import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import './assets/CSS/style.css'



function ImageGallery() {
    const Photos = [
        {
            id: "0",
            name: "Owl",
            type: "bird",
            img_url: require('../src/assets/photos/b1.jpg')

        },
        {
            id: "1",
            name: "Fox",
            type: "animal",
            img_url: require('../src/assets/photos/a1.jpg')

        },
        {
            id: "2",
            name: "Bug",
            type: "insect",
            img_url: require('../src/assets/photos/i1.jpg')

        },
        {
            id: "3",
            name: "Dog",
            type: "pet ",
            img_url: require('../src/assets/photos/p1.jpg')

        },
        {
            id: "4",
            name: "Birds",
            type: "bird",
            img_url: require('../src/assets/photos/b2.jpg')

        },
        {
            id: "5",
            name: "Girrafe",
            type: "animal",
            img_url: require('../src/assets/photos/a2.jpg')

        },
        {
            id: "6",
            name: "Green Bug",
            type: "insect ",
            img_url: require('../src/assets/photos/i2.jpg')

        },
        {
            id: "7",
            name: "Two Dog",
            type: "pet ",
            img_url: require('../src/assets/photos/p2.jpg')

        },
        {
            id: "8",
            name: "Blue Bird",
            type: "bird",
            img_url: require('../src/assets/photos/b3.jpg')

        },
        {
            id: "9",
            name: "Tiger",
            type: "animal",
            img_url: require('../src/assets/photos/a3.jpg')

        },
        {
            id: "10",
            name: "Fly",
            type: "insect",
            img_url: require('../src/assets/photos/i3.jpg')

        },
        {
            id: "11",
            name: "Small Dog",
            type: "pet ",
            img_url: require('../src/assets/photos/p3.jpg')

        },
        {
            id: "12",
            name: "Bird",
            type: "bird",
            img_url: require('../src/assets/photos/b4.jpg')

        },
        {
            id: "13",
            name: "Racoon",
            type: "animal",
            img_url: require('../src/assets/photos/a4.jpg')

        },
        {
            id: "14",
            name: "Grasshoppper",
            type: "insect",
            img_url: require('../src/assets/photos/i4.jpg')

        },
        {
            id: "15",
            name: "Cat",
            type: "pet ",
            img_url: require('../src/assets/photos/p4.jpg')

        },
        {
            id: "16",
            name: "Flying Bird",
            type: "bird",
            img_url: require('../src/assets/photos/b5.jpg')

        },
        {
            id: "17",
            name: "Lion",
            type: "animal",
            img_url: require('../src/assets/photos/a5.jpg')

        },
        {
            id: "18",
            name: "Spider",
            type: "insect",
            img_url: require('../src/assets/photos/i5.jpg')

        },
        {
            id: "19",
            name: "Cat",
            type: "pet ",
            img_url: require('../src/assets/photos/p5.jpg')

        },
        {
            id: "20",
            name: "Birds",
            type: "bird",
            img_url: require('../src/assets/photos/b6.jpg')

        },
        {
            id: "21",
            name: "Deer",
            type: "animal",
            img_url: require('../src/assets/photos/a6.jpg')

        },
        {
            id: "22",
            name: "Red Bug",
            type: "insect",
            img_url: require('../src/assets/photos/i6.jpg')

        },
        {
            id: "23",
            name: "Rabbit",
            type: "pet ",
            img_url: require('../src/assets/photos/p6.jpg')

        },
        {
            id: "24",
            name: "Yellow Bird",
            type: "bird",
            img_url: require('../src/assets/photos/b7.jpg')

        },
        {
            id: "25",
            name: "Horse",
            type: "animal",
            img_url: require('../src/assets/photos/a7.jpg')

        },
        {
            id: "26",
            name: "Butterfly",
            type: "insect",
            img_url: require('../src/assets/photos/i7.jpg')

        },
        {
            id: "28",
            name: "Yellow Bird",
            type: "bird",
            img_url: require('../src/assets/photos/b8.jpg')

        },
        {
            id: "29",
            name: "Leopard",
            type: "animal",
            img_url: require('../src/assets/photos/a8.jpg')

        },
        {
            id: "30",
            name: "Butterfly",
            type: "insect",
            img_url: require('../src/assets/photos/i8.jpg')

        },
        {
            id: "31",
            name: "Cat",
            type: "pet ",
            img_url: require('../src/assets/photos/p8.jpg')

        },


    ]

    const [filteredphoto, setFilteredphoto] = useState(Photos)

    const filterfunction = (str) => {
        if (str === "all") {
            setFilteredphoto(Photos);
        } else {
            setFilteredphoto(Photos.filter((item) =>
                item.type.toLocaleLowerCase().includes(str.toLocaleLowerCase())
            ))
        }
    }


    const sortfunction = (sortdata, x, y) => {
        if (sortdata) {
            const sortedphotos = [...filteredphoto].sort((a, b) => {
                return a[sortdata] > b[sortdata] ? x : y;
            })
            setFilteredphoto(sortedphotos);
        }
    }


    const [searchQuery, setSearch] = useState()
    const searchphoto = (e) => {
        e.preventDefault()
        if (searchQuery) {
            setFilteredphoto(Photos.filter((item) =>
                item.type.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) |
                item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
            ))
        }
    }

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg background bg-body-tertiary " >
                    <div className="container-fluid  "  >
                        <a className="navbar-brand text-white" href="#" onClick={() => { filterfunction("all") }}>Masonry Gallery</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#" onClick={() => { filterfunction("all") }}>All</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#" onClick={() => { filterfunction("bird") }}>Birds</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#" onClick={() => { filterfunction("animal") }}>Animals</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#" onClick={() => { filterfunction("insect") }}>Insects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#" onClick={() => { filterfunction("pet") }}>Pets</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort With
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#" onClick={() => { sortfunction("name", '1', '-1') }}>Name(A-Z)</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => { sortfunction("name", '-1', '1') }}>Name(Z-A)</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex " role="search" onSubmit={(e) => { searchphoto(e) }}>
                                <input className=" form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setSearch(e.target.value) }} />
                                <button className="btn  btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            <div style={{ padding: "15px" }}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry gutter="25px">
                        {filteredphoto.map((item, index) => {
                            return (
                                <div className="img" key={item.id}>
                                    <div>
                                        <img
                                            className="inner-img"
                                            src={item.img_url}
                                            style={{ borderRadius: "20px", width: "100%", height: "80%", display: "block" }}
                                            alt={item.name} />
                                    </div>
                                </div>
                            )
                        })}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    )
}
export default ImageGallery;