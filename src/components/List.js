import React, { useContext, useState, useEffect } from "react";
import "./List.css";
import { Card, ListGroup } from "react-bootstrap";
import LoginContext from "../LoginContext";

const getList = async (token) => {
    const response = await fetch("http://localhost:3001/getList", { headers: { Authorization: `Bearer ${token}` }, method: "GET" });
    return await response.json();
}

function List() {
    const [token] = useContext(LoginContext);
    const [response, setResponse] = useState([]);
    
    useEffect(() => {
        let mounted = true;
    
        const getListAsync = async () => {
          const data = await getList(token);
          if (mounted) {
            setResponse(data);
          }
        };

        getListAsync();

        return () => {
          mounted = false;
        };
      }, [token]);

      console.log(response)

    return(
        <>
            <div>
                {response.map((item) => 
                <Card className="a" key={item.owner_id}>
                    <ListGroup variant="flush" className="list-group-flush">
                        <ListGroup.Item>
                            <Card.Link>{item.name}</Card.Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>)}
            </div>
        </>
    )
}

export default List;