import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Header from "./Header";
import Footer from "./Footer";



function Profile () {
    const { isAuthenticated, user } = useAuth0();
    return (
        <div>
            <Header />
            {isAuthenticated &&
            <div className="pro">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${user.picture}`} alt="profile" />
                    <Card.Body>
                        <Card.Title className="name">{user.name}</Card.Title>
                        <Card.Text className='name'>
                            {user.email}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            }
            <Footer />
        </div>


    );
}

export default Profile;