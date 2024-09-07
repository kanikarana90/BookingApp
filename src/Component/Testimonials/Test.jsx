import React from 'react';
import './Test.css'; // Ensure correct path to your CSS file
import owner from "../../assets/owner.jpeg"; // Adjust path as necessary
import owner1 from "../../assets/owner1.jpg";
import owner2 from "../../assets/owner2.jpg";
import { useTranslation } from "react-i18next";

const Container = () => {
    const { t } = useTranslation();

    // Sample data for each box
    const boxes = [
        {
            id: 1,
            title: t('Founder_of_GO24Online'),
            description: t('As_the_founder'),
            image: owner,
        },
        {
            id: 2,
            title: 'Box 2',
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            image: owner1,
        },
        {
            id: 3,
            title: 'Box 3',
            description: 'Integer tristique ipsum nec dui maximus, nec bibendum lacus rutrum.',
            image: owner2,
        }
    ];

    return (
        <div className="container1">
            {boxes.map(box => (
                <div key={box.id} className="box">
                    <img src={box.image} alt={box.title} className="box-image" />
                    <div className="box-content">
                        <h3>{box.title}</h3>
                        <p>{box.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Container;
