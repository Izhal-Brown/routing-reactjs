import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar'
import './css/style.css';
import foto from './img/Cartoonku.png';
import photoshop from './img/Photoshop.png';
import coreldraw from './img/coreldraw.png';
import msoffice from './img/msoffice.png';
import networking from './img/networking.png';
import teknisikomputer from './img/teknisikomputer.png';
import webprogramming from './img/webprogramming.png';
import {Container, Form, Button,Row, Col, Card, Modal} from "react-bootstrap";


export default class Biografi extends React.Component{

  constructor(){
    super()
    this.state={
      show:false
    }
  }

  handleModal(){
    this.setState({show:!this.state.show})
  }

  render() {
    return (
      <>
        <Navbar />
        <Container fluid className="jumbotron">
          <Row className="foto">
            <Col >
              <img src={foto} alt="" width="200"/>
            </Col>
          </Row>
          <Row className="nama">
            <Col >
              <h1 className="md-auto">Hello! My Name is <span> Rizhal </span></h1>
            </Col>
          </Row>
          <Row className="mydata">
            <Col >
              <p className="align-self-center mx-5 mt-2 mb-4 text-center fs-5">Saya tinggal di palopo sulawesi selatan tetapi saya lahirnya di makassar ibukota dari provinsi sulawesi selatan, saat ini bekerja sebagai IT Support di sebuah perusahaan di palopo yang jobnya memantau CCTV, menjaga sistem yang dipakai dikantor tetap berjalan dengan semestinya, menangani trouble network, PC, CCTV, dan alat-alat pendukung kinerja karyawan tetap bisa digunakan dengan semestinya dan juga closing data tiap harinya</p>
            </Col>
          </Row>
          <Row className="tombol">
            <Col >
              <Button variant="primary" className="btn-modal" onClick={() => {this.handleModal()}}>
                Contact Me
              </Button>
            </Col>
            <Col>
              <Modal
                show={this.state.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Contact Me
                  </Modal.Title>
                  <Button variant="outline-danger" onClick={() => {this.handleModal()}}> x </Button>
                </Modal.Header>
                <Modal.Body>
                  <Row className="contact-form">
                    <Col className="form-item">
                      <Form.Group>
                        <Form.Label for="nama">Nama :</Form.Label>
                        <Form.Control  type="text" placeholder="Nama" id="nama"/>
                      </Form.Group>
                    </Col>
                    <Col className="form-item">
                      <Form.Group>
                        <Form.Label for="email">Email :</Form.Label>
                        <Form.Control type="email" placeholder="Email" id="email"/>
                      </Form.Group>
                    </Col>
                    <Col className="form-item">
                      <Form.Group>
                        <Form.Label for="handphone">No Handphone :</Form.Label>
                        <Form.Control type="text" placeholder="No. Handphone" id="handphone"/>
                      </Form.Group>
                    </Col>
                    <Col className="form-item">
                      <Form.Group>
                        <Form.Label for="subject">Subject :</Form.Label>
                        <Form.Control type="text" placeholder="subject" id="subject"/>
                      </Form.Group>
                    </Col>
                    <Col className="form-item">
                      <Form.Group>
                        <Form.Label for="message">Pesan :</Form.Label>
                        <Form.Control as="textarea" name="Message" id="message" row={10}/>
                      </Form.Group>
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success">Send</Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
        <Container fluid className="info text-center">
          <Row className="info-item">
            <Col>
              <h2 className="icon-info"><i className="bi bi-phone-fill"></i></h2>
              <h4 className="info-title">085 340 712 885</h4>
            </Col>
          </Row>
          <Row className="info-item">
            <Col>
              <h2 className="icon-info"><i className="bi bi-geo-alt-fill"></i></h2>
              <h4 className="info-title">Jl. Lorem ipsum dolor sit, Palopo</h4>
            </Col>
          </Row>
          <Row className="info-item">
            <Col>
              <h2 className="icon-info"><i className="bi bi-envelope-fill"></i></h2>
              <h4 className="info-title">informatika749@gmail.com</h4>
            </Col>
          </Row>
          <Row className="info-item">
            <Col>
              <h2 className="icon-info"><i className="bi bi-facebook"></i></h2>
              <h4 className="info-title">Rizhal Ridwan</h4>
            </Col>
          </Row>
        </Container>
        <Container className="ppdk">
          <Card>
            <Card.Header>
              <h5> <i className="bi bi-person-badge"></i> Personal Data </h5>
            </Card.Header>
            <Card.Body>
              <Row className="card-item">
                <Col>
                  <h5>Tempat Lahir</h5>
                  <span className="dubbelepunt">:</span>
                  <p>Makassar</p>
                </Col>
              </Row>
              <Row className="card-item">
                <Col>
                  <h5>Tanggal Lahir</h5>
                  <span className="dubbelepunt">:</span>
                  <p>29 Desember 1992</p>
                </Col>
              </Row>
              <Row className="card-item">
                <Col>
                  <h5>Jenis Kelamin</h5>
                  <span className="dubbelepunt">:</span>
                  <p> Laki-laki </p>
                </Col>
              </Row>
              <Row className="card-item">
                <Col>
                  <h5>Agama</h5>
                  <span className="dubbelepunt">:</span>
                  <p> Islam </p>
                </Col>
              </Row>
              <Row className="card-item">
                <Col>
                  <h5>Status</h5>
                  <span className="dubbelepunt">:</span>
                  <p> Lajang </p>
                </Col>
              </Row>
              <Row className="card-item">
                <Col>
                  <h5>Pendidikan</h5>
                  <span className="dubbelepunt">:</span>
                  <p>S1, Sistem Informasi</p>
                </Col>
              </Row>
              </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h5> <i className="bi bi-briefcase-fill"></i> Pengalaman Kerja </h5>
            </Card.Header>
            <Card.Body className="timeline">
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date"> <h5> 2013 - 2015 </h5> </div>
                  <span className="circle-dot"></span>
                  <h4 className="timeline-title">STAFF ADM JUNIOR PABRIK KARET</h4>
                  <p className="timeline-text">PT. Jhonlin Agro Mandiri</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date"> <h5> 2015 - 2016 </h5> </div>
                  <span className="circle-dot"></span>
                  <h4 className="timeline-title">STAFF LABORATORIUM & ASDOS</h4>
                  <p className="timeline-text">AMIK IBNU KHLADUM PALOPO</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date"> <h5> 2016 - 2017 </h5> </div>
                  <span className="circle-dot"></span>
                  <h4 className="timeline-title">STAFF LAB & INSTRUKTUR</h4>
                  <p className="timeline-text">SMART EDUCATION PALOPO</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date"> <h5> 2017 - 2018 </h5> </div>
                  <span className="circle-dot"></span>
                  <h4 className="timeline-title">STAFF ADMINISTRASI</h4>
                  <p className="timeline-text">PT. Pusaka Jaya Internasional</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date"> <h5> 2019 - Sekarang </h5> </div>
                  <span className="circle-dot"></span>
                  <h4 className="timeline-title">STAFF IT SUPPORT</h4>
                  <p className="timeline-text">PT. Sanggar Laut Selatan</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
        <Container fluid className="education">
          <Card>
            <Card.Header>
              <h5 className="card-header"> <i className="bi bi-pencil-fill"></i> Pendidikan </h5>
            </Card.Header>
            <Card.Body className="education">
              <Row className="timeline-education">
                <Col className="timeline-item">
                  <div className="timeline-date text-center"> <h5> 1999 - 2004 </h5> </div>
                  <h4 className="timeline-title text-center">SD</h4>
                  <p className="timeline-text text-center">SD Negeri 75 Surutanga</p>
                </Col>
                <Col className="timeline-item">
                  <div className="timeline-date text-center"> <h5> 2004 - 2007 </h5> </div>
                  <h4 className="timeline-title text-center">SMP</h4>
                  <p className="timeline-text text-center">SMP Negeri 7 Palopo</p>
                </Col>
                <Col className="timeline-item">
                  <div className="timeline-date text-center"> <h5> 2007 - 2010 </h5> </div>
                  <h4 className="timeline-title text-center">SMA</h4>
                  <p className="timeline-text text-center">SMK Negeri 2 Palopo</p>
                </Col>
                <Col className="timeline-item">
                  <div class="timeline-date text-center"> <h5> 2010 - 2013 </h5> </div>
                  <h4 className="timeline-title text-center">D3</h4>
                  <p className="timeline-text text-center">AMIK Ibnu Khaldum Palopo</p>
                </Col>
                <Col className="timeline-item">
                  <div className="timeline-date text-center"> <h5> 2015 - 2017 </h5> </div>
                  <h4 className="timeline-title text-center">S1</h4>
                  <p className="timeline-text text-center">STMIK Handayani Makassar</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
        <Container fluid className="pnfs">
          <Card className="nonformal">
            <Card.Header>
              <h5 className="card-header"> <i className="bi bi-vector-pen"></i> Pendidikan Non Formal </h5>
            </Card.Header>
            <Card.Body className="timeline-nonformal">
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date">2009</div>
                  <span className="circle-dot"></span>
                  <p className="timeline-text">Pelatihan Manajemen Kepemimpinan Remaja Masjid</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date">2013</div>
                  <span className="circle-dot"></span>
                  <p className="timeline-text">Pelatihan Kerja, Teknisi Komputer</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date">2015</div>
                  <span className="circle-dot"></span>
                  <p className="timeline-text">Sertifikasi Profesi, Basic Computer Assembly</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date">2016</div>
                  <span className="circle-dot"></span>
                  <p className="timeline-text">Pelatihan dan Workshop, VOIP & Rural Longe Range Wireless</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date">2017</div>
                  <span className="circle-dot"></span>
                  <p className="timeline-text">Workshop Integrasi Antara Aplikasi dan Web Menggunakan MySQL</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date">2017</div>
                  <span className="circle-dot"></span>
                  <p className="timeline-text">IT Training Profesional, Jaringan Komputer & Sistem Administrasi</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date">2017</div>
                  <span className="circle-dot"></span>
                  <p className="timeline-text">Pelatihan Android Basic User Interface & User Input</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date">2020</div>
                  <span className="circle-dot"></span>
                  <p className="timeline-text">Ahli K3 Umum</p>
                      </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date">2021</div>
                  <span className="circle-dot"></span>
                  <p className="timeline-text">Website Creation</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date">2022</div>
                  <span className="circle-dot"></span>
                  <p className="timeline-text">Programming Fundamental</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date">2022</div>
                  <span className="circle-dot"></span>
                  <p className="timeline-text">Menguasai Fundamental Algoritma</p>
                </Col>
              </Row>
              <Row className="timeline-item">
                <Col>
                  <div className="timeline-date">2022</div>
                  <span className="circle-dot"></span>
                  <p className="timeline-text">Mahir Membuat DB Aplikasi Profesional</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="skills">
            <Card.Header>
              <h5 className="skill-header"><i className="bi bi-cpu-fill"></i>skills</h5>
            </Card.Header>
            <Card.Body className="skill-body">
                <Row className="skill-item">
                  <Col>
                    <img src={msoffice} alt=""/>
                    <h4 className="progress-title">Ms. Office</h4>
                    <div className="progress">
                      <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{width:'85%'}}>85%</div>
                    </div>
                  </Col>
                </Row>
                <Row className="skill-item">
                  <Col>
                    <img src={coreldraw} alt=""/>
                    <h4 className="progress-title">CorelDRAW</h4>
                    <div className="progress">
                      <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{width:'75%'}}>75%</div>
                    </div>
                    </Col>
                </Row>
                <Row className="skill-item">
                  <Col>
                    <img src={photoshop} alt=""/>
                    <h4 className="progress-title">Photoshop</h4>
                    <div className="progress">
                      <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{width:'75%'}}>75%</div>
                    </div>
                  </Col>
                </Row>
                <Row className="skill-item">
                  <Col>
                    <img src={teknisikomputer} alt=""/>
                    <h4 className="progress-title">Teknisi Komputer</h4>
                    <div className="progress">
                      <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{width:'85%'}}>85%</div>
                    </div>
                  </Col>
                </Row>
                <Row className="skill-item">
                  <Col>
                    <img src={networking} alt=""/>
                    <h4 className="progress-title">Networking</h4>
                    <div className="progress">
                      <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{width:'75%'}}>75%</div>
                    </div>
                  </Col>
                </Row>
                <Row className="skill-item">
                  <Col>
                    <img src={webprogramming} alt="" />
                    <h4 className="progress-title">Web Programming</h4>
                    <div className="progress">
                      <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{width:'50%'}}>50%</div>
                    </div>
                  </Col>
                </Row>
            </Card.Body>
          </Card>
        </Container>
        <Container fluid>
          <Row className="footer">
            <Col>
              <p> &copy; Copyright By Izhal 2022</p>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}