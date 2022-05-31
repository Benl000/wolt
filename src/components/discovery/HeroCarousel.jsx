import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ReactComponent as PrevArrow } from './../../assets/svgs/HeroCarousel/carouselPrevArrow.svg';
import { ReactComponent as NextArrow } from './../../assets/svgs/HeroCarousel/carouselNextArrow.svg';

// import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';


// class HeroCarousel extends Component {
//     render() {
//         return (
//             <Carousel>
//                 <div>
//                     <img src="https://discovery-cdn.wolt.com/cities/pardes-hanna/sections/6b168452-2f49-11ec-bafb-5ad66ffd7d47_______min.jpg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// };

// const tooglesGroupId = 'Toggles';
// const valuesGroupId = 'Values';
// const mainGroupId = 'Main';


// const getConfigurableProps = () => ({
//     showArrows: boolean('showArrows', true, tooglesGroupId),
//     showStatus: boolean('showStatus', true, tooglesGroupId),
//     showIndicators: boolean('showIndicators', true, tooglesGroupId),
//     infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
//     showThumbs: boolean('showThumbs', true, tooglesGroupId),
//     useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
//     autoPlay: boolean('autoPlay', true, tooglesGroupId),
//     stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
//     swipeable: boolean('swipeable', true, tooglesGroupId),
//     dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
//     emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
//     autoFocus: boolean('autoFocus', false, tooglesGroupId),
//     thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
//     selectedItem: number('selectedItem', 0, {}, valuesGroupId),
//     interval: number('interval', 2000, {}, valuesGroupId),
//     transitionTime: number('transitionTime', 500, {}, valuesGroupId),
//     swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
//     ariaLabel: text('ariaLabel', undefined),
// });

export const HeroCarousel = () => {
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
    };

    return (
        <Carousel 
        style={{position: 'relative'}}
        showIndicators={false}
        infiniteLoop

        renderArrowPrev={(onClickHandler) => {
            return <div onClick={onClickHandler} style={{...arrowStyles, left: '15px'}}>
                
                {/* <button type="button" aria-label="Previous item" class="IconButton__Root-sc-jshws7-0 iGnpCZ"> */}

                <PrevArrow style={{width: '17.5px' , height: '17.5px'}}/>
                
                {/* </button> */}
                </div>
                
        }}

        renderArrowNext={(onClickHandler) => {
            return <div onClick={onClickHandler} style={{...arrowStyles, right: '15px'}}>
                
                {/* <button type="button" aria-label="Previous item" class="IconButton__Root-sc-jshws7-0 iGnpCZ"> */}

                <NextArrow  style={{width: '17.5px' , height: '17.5px'}}/>
                
                {/* </button> */}
                </div>
                
        }}
        showThumbs={false}
        >
            {/* <Carousel
                infiniteLoop
                centerMode
                centerSlidePercentage={number('centerSlidePercentage', 80, {}, mainGroupId)}
                {...getConfigurableProps()}
            > */}
                <div>
                    <img src="https://discovery-cdn.wolt.com/cities/pardes-hanna/sections/6b168452-2f49-11ec-bafb-5ad66ffd7d47_______min.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://discovery-cdn.wolt.com/cities/pardes-hanna/sections/ec24ce68-df5d-11ec-98af-32157f6bdcdc_screen_shot_2022_04_28_at_14.23.09.png" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://discovery-cdn.wolt.com/cities/pardes-hanna/sections/46a73b1a-a8c2-11eb-9007-06bbc94a43b3_c594e8d2_8176_11eb_8254_baee0c1d5f3c_4__1_.jpeg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="https://discovery-cdn.wolt.com/cities/pardes-hanna/sections/85f01e8c-2f49-11ec-a3f6-da83aee332f1_hero.png" class="ImageWithBlurHashTransition__Image-sc-cnbybj-2 ejAoa" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    {/* <img src="https://discovery-cdn.wolt.com/cities/pardes-hanna/sections/ec24ce68-df5d-11ec-98af-32157f6bdcdc_screen_shot_2022_04_28_at_14.23.09.png" /> */}
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    {/* <img src="https://discovery-cdn.wolt.com/cities/pardes-hanna/sections/ec24ce68-df5d-11ec-98af-32157f6bdcdc_screen_shot_2022_04_28_at_14.23.09.png" /> */}
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    {/* <img src="https://discovery-cdn.wolt.com/cities/pardes-hanna/sections/ec24ce68-df5d-11ec-98af-32157f6bdcdc_screen_shot_2022_04_28_at_14.23.09.png" /> */}
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    {/* <img src="https://discovery-cdn.wolt.com/cities/pardes-hanna/sections/ec24ce68-df5d-11ec-98af-32157f6bdcdc_screen_shot_2022_04_28_at_14.23.09.png" /> */}
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    {/* <img src="https://discovery-cdn.wolt.com/cities/pardes-hanna/sections/ec24ce68-df5d-11ec-98af-32157f6bdcdc_screen_shot_2022_04_28_at_14.23.09.png" /> */}
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    {/* <img src="https://discovery-cdn.wolt.com/cities/pardes-hanna/sections/ec24ce68-df5d-11ec-98af-32157f6bdcdc_screen_shot_2022_04_28_at_14.23.09.png" /> */}
                    {/* <p className="legend">Legend 2</p> */}
                </div>
            </Carousel>
            );
};


// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));