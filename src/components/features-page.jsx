import React from 'react'
import monthView from '../assets/monthView.png'
import weekView from '../assets/weekView.png'
import dayView from '../assets/dayView.png'

const FeaturesPage = () => {
    return (
        <div id="features" class="featuresCont">
            <div class="imagesCont">
                <img src={monthView} alt="Cover Image" class="monthView Image" />
                <img src={weekView} alt="Cover Image" class="weekView Image" />
                <img src={dayView} alt="Cover Image" class="dayView Image" />
            </div>
        </div>
    )
}

export default FeaturesPage