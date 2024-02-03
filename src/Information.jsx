import React from 'react';


import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';

const Information = () => {
    const Backgroundset = {
        backgroundColor: 'aqua',
        marginTop: '10px'
      };
      const Backgroundset1 = {
        backgroundColor: 'teal'
      };
      const mycolor = {
        color: 'red',
        
      };
  return (
<div style={Backgroundset1}>
<Container  className="mt-4">
      <Row>
        <Col md={3} >
          <Card  style={Backgroundset}>
            <Card.Body>
              <Card.Title >Company Name <br/>
                <b  style={mycolor }>IEC,Pune</b>
              </Card.Title>
             
              <ButtonGroup className="me-2">
                    <Link to="/signup" className="btn btn-primary">
                       Register
                    </Link>
                  </ButtonGroup>
           
               
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Card>
            <Card.Body  >
              <Card.Title style={mycolor }> Information About My Company</Card.Title>
              <Card.Text>
                <mark  >Lorem ipsum dolor</mark> sit amet, <abbr title="abbreviation" >consectetur adipisicing elit</abbr>. Asperiores beatae, repellat, fuga dolorum perspiciatis delectus iure minus architecto deserunt, mollitia dolore at ipsa eum nobis! Expedita cupiditate corporis ipsam voluptatibus voluptatem sit delectus reprehenderit enim quas, deleniti sequi at perspiciatis asperiores vel pariatur distinctio officiis necessitatibus animi, quod id <mark>explicabo? Culpa qui quibusdam suscipit eos temporibus</mark> laboriosam! Veniam sed, ad, dolores voluptas cumque dolorum temporibus eveniet quaerat voluptatibus eaque quam assumenda aliquam incidunt optio praesentium quia modi, dolor non enim! Amet <b>tempora, ipsam consectetur </b>non sapiente veniam distinctio sunt laboriosam recusandae maxime, delectus, adipisci et pariatur nemo! Quidem, alias quos.
                Lorem <abbr title="abbreviation">ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat, </abbr> provident reiciendis <mark> dolor tempora quos culpa facere, natus officia adipisci perferendis</mark> ratione totam nulla harum, illum aut cupiditate inventore. Vel neque dolorem praesentium porro voluptatem laudantium obcaecati at ipsum necessitatibus? Dolorem itaque voluptatem velit culpa maiores sunt adipisci est ullam saepe laudantium corrupti, doloribus porro animi numquam  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam placeat porro sapiente recusandae doloribus velit perspiciatis earum facilis molestias deserunt excepturi maiores, tempora adipisci aliquid non quod at exercitationem accusantium. Sint soluta possimus alias rerum debitis dicta dolor placeat doloribus tenetur labore qui eveniet libero, provident <abbr title='abbrivation'>iusto neque maxime cupiditate error eos magnam</abbr> minus tempora quo accusantium nihil aliquid! Optio vitae qui porro eum eligendi error. Cum consectetur, laboriosam officiis minima, facilis porro atque illum dolorem, incidunt beatae temporibus dolor! Iste fugit temporibus officiis ut molestiae odit nulla assumenda fugiat! Quia dolores illo illum mollitia velit, nostrum ipsum nisi vel! laboriosam quibusdam optio veritatis quisquam deleniti! Doloribus, sapiente <mark>is! Sed quam, porro beatae quae a nam quis maxime.</mark> Eum similique at, quod ad omnis quasi sapiente incidunt facere velit? Accusantium nam fugiat corporis veritatis pariatur debitis libero necessitatibus in voluptatibus facilis, voluptate dolores!
                Additional information or side <em>content can go here.</em> You can add more cards, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem, ex ipsa nisi corporis placeat assumenda inventore aut voluptates officia laudantium quas at nostrum omnis enim saepe? Magni in harum ipsam eius natus doloremque deserunt laborum! Necessitatibus mollitia accusantium beatae earum rerum? Temporibus, deleniti dicta quos quod commodi nihil enim modi laborum. Iure explicabo ipsum debitis consequuntur. Sint, culpa? Mollitia quisquam exercitationem harum deserunt error incidunt hic reprehenderit saepe eius! Vel voluptatibus reprehenderit impedit neque laudantium nostrum, nesciunt facilis provident accusamus aut nihil commodi sint fugit non, similique ipsum dignissimos ea sed ipsam eligendi sapiente excepturi facere, reiciendis iste. Eligendi. images, or other components.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
</div>
  );
};

export default Information;
