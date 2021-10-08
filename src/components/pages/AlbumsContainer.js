import React, {useEffect,useState} from "react";
import Album from "../albums/Album";
import { Jumbotron, Container, Button } from "react-bootstrap";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

const AlbumsContainer = (props) => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        // if there is no token in localStorage, then the user is in authenticated
        if (!localStorage.getItem('jwtToken')) {
          console.log('is Authenticated: >>> false');
          props.setIsAuthenticated(false);
        } else {
            // get family members from local storage
        let getAlbums  = localStorage.getItem('albums');
        let allAlbums = JSON.parse(getAlbums);
        // console.log('allalbums',getAlbums)
        setAlbums(allAlbums)
        }
      }, []);
    // console.log('albums container',props);
    const allAlbums = albums.map(al => {
        return <Album albums={al} title={al.albumName} images={al.albumPics}/>
    })
    return (
        <div>
            <main role="main">
            <Jumbotron className="text-center">
                <Container>
                    <h1 className="jumbotron-heading">Album example</h1>
                    <p className="lead text-muted">
                        Something short and leading about the collection
                        below—its contents, the creator, etc. Make it short and
                        sweet, but not too short so folks don't simply skip over
                        it entirely.
                    </p>
                    <p>
                        <Button color="primary" className="mx-1 my-2">
                            Main call to action
                        </Button>
                        <Button color="secondary" className="my-2">
                            Secondary action
                        </Button>
                    </p>
                </Container>
            </Jumbotron>
        </main>
            {allAlbums}
        </div>
    )
}

export default AlbumsContainer;