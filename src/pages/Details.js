import React, { useState, useEffect } from "react";
import { Badge, Button, Row, Col, Container } from "react-bootstrap";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, Link } from "react-router-dom";

import moment from "moment";

export default function Details() {
  const { id } = useParams();
  let [job, setJob] = useState(null);

  const getData = async () => {
    // let url = `http://localhost:3001/jobs/${id}`;
    let url = `https://my-json-server.typicode.com/legobitna/Itviec/jobs/${id}`;
    let data = await fetch(url);
    let result = await data.json();
    setJob(result);
  };
  useEffect(() => {
    getData();
  }, []);

  if (job === null) {
    return <div>No data yet</div>;
  }
  return (
    <div className="App">
      <div className="navigation">
        <Container>
          <img className="logo-itviec" alt="itviec" src="/images/itviec.png" />
        </Container>
      </div>
      <Container className="middle">
        <div className="white-container">
          {/* <div style={{ textAlign: "right" }}>
            <Link to={`/edit/${job.id}`} style={{ marginRight: "10px" }}>
              Edit
            </Link>
            <a href="#">Delete</a>
          </div> */}
          <Row>
            <Col>
              <img src={job.img} />
            </Col>
            <Col xs={10}>
              <h2>{job.title}</h2>
              <div>
                {job.tags.map((tag) => (
                  <Badge variant="secondary" className="badge-style">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div style={{ paddingTop: "10px", color: "grey" }}>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  style={{ marginRight: "10px" }}
                />{" "}
                {job.salary}
              </div>
              <div style={{ color: "grey" }}>
                <FontAwesomeIcon
                  icon={faMapMarker}
                  style={{ marginRight: "10px" }}
                />{" "}
                {job.city} District {job.district}
              </div>
              <div style={{ color: "blue" }}>
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ marginRight: "10px" }}
                />
                {moment(job.time).fromNow()}
              </div>
              <div style={{ paddingTop: "20px" }}>
                <h2>Benefit</h2>
                <ul className="benefit-list" style={{ fontSize: "18px" }}>
                  {job.benefits.map((benefit) => (
                    <li>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <h2>Description</h2>
                <div>{job.description}</div>
              </div>
              <Button
                variant="danger"
                style={{ width: "100%", marginTop: "30px", fontSize: "18px" }}
              >
                Apply Now
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
