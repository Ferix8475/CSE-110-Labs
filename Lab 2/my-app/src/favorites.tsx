import React from 'react';

export function LikeList({ favorites }: { favorites: string[] }) {
    return (
        <div>
            <h2>List of favorites</h2>
            <ul>
                {favorites.map((favorite, index) => (
                    <li key={index}>{favorite}</li>
                ))}
            </ul>
        </div> 
    );
}