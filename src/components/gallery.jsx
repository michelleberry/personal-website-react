import { getCollection, getPiece } from './galleryCollections';
import {useParams, Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export function PieceDetail() {
    window.scrollTo(0, 0);
    const { piece_id } = useParams();
    const { yr } = useParams();
    const piece = getPiece(piece_id, yr)
    const back_linky = "/view_gallery/" + yr
    return (
        <Container fluid>
            <Row fluid>
                <Col md="auto">
                    <Container>
                    <br/>
                    <h1 class="display-5">{piece.title} </h1>
                    <p style={{fontSize: 2 + 'em'}}>{yr}</p>
                    <h5>Description:</h5>
                    <p>{piece.description}</p>
                    <h5>Medium:</h5>
                    <p>{piece.medium}</p>
                    <br/>
                    <Link to={back_linky} class="btn btn-outline-secondary"> &lt;&lt; Back to Gallery - Artworks {yr}</Link>
                    </Container>
                </Col>
                <Col>
                    <img style={{display:'block', float: 'right'}} src={piece.image_url} alt="" width="100%"/> 
                </Col>
            </Row>
        </Container>
    )
}

export function Gallery() {
    const { yr } = useParams(); 
    const pieces = getCollection(yr)

    return (
        <body>
            <br/>
            <h1 class='display-5' style={{textAlign: 'center'}}>Artworks - { yr }</h1>
            <br/>
            <div class="row">
                {pieces.map(function(piece, i){
                    const linky = "/view_piece/" + yr + "/" + piece.id
                    return (
                        <div class="col-md-4">
                            <div class="card mb-2">
                                <img class="card-img-top" src={piece.image_url} alt={piece.title}/>
                                <div class="card-body">
                                    <h5 class="card-title">{piece.title}</h5>
                                    <Link to={linky} class="btn btn-outline-secondary">
                                        View Description & Details »
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </body>
        
    )
}


export function ChooseGallery() {
    return (
        <div>
            <br/>
            <h1 class="display-4" style={{textAlign: 'center'}}>Click on a door to enter that gallery.</h1>
            <br/>
  

            <div class = "container-fluid">
                <div class= "row justify-content-center">
                
                    <div class="col">
                        <ul class="nav justify-content-center">
                        <h2>2018</h2>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav justify-content-center">
                        <h2>2019</h2>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav justify-content-center">
                        <h2>2020</h2>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav justify-content-center">
                        <h2>2021</h2>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav justify-content-center">
                        <h2>2022</h2>
                        </ul>
                    </div>
                
                </div>
                <div class="row justify-content-center">
                    <div class="col">
                        <ul class="nav justify-content-center">
                            <Link to='/view_gallery/2018'>
                                <img class="img" 
                                src="https://media.graphassets.com/ydXoBYf5R1ODY0I8rsIr" 
                                onMouseOver={e => (e.currentTarget.src ="https://media.graphassets.com/o5CpDiTPTS5OXbPc4qPS")}
                                onMouseOut={e=> (e.currentTarget.src = "https://media.graphassets.com/ydXoBYf5R1ODY0I8rsIr")} 
                                alt="" width="100%"/>
                            </Link>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav justify-content-center">
                            <Link to='/view_gallery/2019'>
                                <img class="img" 
                                src="https://media.graphassets.com/ydXoBYf5R1ODY0I8rsIr" 
                                onMouseOver={e => (e.currentTarget.src ="https://media.graphassets.com/o5CpDiTPTS5OXbPc4qPS")}
                                onMouseOut={e=> (e.currentTarget.src = "https://media.graphassets.com/ydXoBYf5R1ODY0I8rsIr")} 
                                alt="" width="100%"/>
                            </Link>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav justify-content-center">
                            <Link to='/view_gallery/2020'>
                                <img class="img" 
                                src="https://media.graphassets.com/ydXoBYf5R1ODY0I8rsIr" 
                                onMouseOver={e => (e.currentTarget.src ="https://media.graphassets.com/o5CpDiTPTS5OXbPc4qPS")}
                                onMouseOut={e=> (e.currentTarget.src = "https://media.graphassets.com/ydXoBYf5R1ODY0I8rsIr")} 
                                alt="" width="100%"/>
                            </Link>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav justify-content-center">
                            <Link to='/view_gallery/2021'>
                                <img class="img" 
                                src="https://media.graphassets.com/ydXoBYf5R1ODY0I8rsIr" 
                                onMouseOver={e => (e.currentTarget.src ="https://media.graphassets.com/o5CpDiTPTS5OXbPc4qPS")}
                                onMouseOut={e=> (e.currentTarget.src = "https://media.graphassets.com/ydXoBYf5R1ODY0I8rsIr")} 
                                alt="" width="100%"/>
                            </Link>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav justify-content-center">
                            <Link to='/view_gallery/2022'>
                                <img class="img" 
                                src="https://media.graphassets.com/ydXoBYf5R1ODY0I8rsIr" 
                                onMouseOver={e => (e.currentTarget.src ="https://media.graphassets.com/o5CpDiTPTS5OXbPc4qPS")}
                                onMouseOut={e=> (e.currentTarget.src = "https://media.graphassets.com/ydXoBYf5R1ODY0I8rsIr")} 
                                alt="" width="100%"/>
                            </Link>
                        </ul>
                    </div>
                </div>
         </div>
    </div>
    )
}

