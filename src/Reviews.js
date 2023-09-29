import React from 'react';
import StarRating from './StarRating';

function Reviews() {
    return (
        <div className="container mt-5">
            <div className="review-card mb-3">
                <p>John Doe</p>
                <StarRating rating={4} />
                <p>Great product!</p>
            </div>
            {/* You can repeat the above structure for each review */}
        </div>
    );
}

export default Reviews;
