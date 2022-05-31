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
        width: 40,
        height: 40,
        cursor: 'pointer',
        background: '#009de014',
        border: 'none'

    };

    return (
        <Carousel
            style={{ position: 'relative' }}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            // centerMode
            // centerSlidePercentage={('centerSlidePercentage', 40)}
            // centerSlidePercentage={number('centerSlidePercentage', 80, {}, mainGroupId)}
            // {...getConfigurableProps()}


            renderArrowPrev={(onClickHandler) => {
                return <button onClick={onClickHandler} style={{ ...arrowStyles, left: '10px' }} type="button" aria-label="Previous item">

                    <PrevArrow style={{ width: '17.5px', height: '17.5px' }} />

                </button>;
            }}

            renderArrowNext={(onClickHandler) => {
                return <button onClick={onClickHandler} style={{ ...arrowStyles, right: '10px' }} type="button" aria-label="Next item">

                    <NextArrow style={{ width: '17.5px', height: '17.5px' }} />

                </button>;

            }}
        >
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
                <img src="https://discovery-cdn.wolt.com/cities/tel-aviv/sections/cf84e042-3b2d-11ec-8b30-8ee92b7a1b44_tuesday_min.png" />
                {/* <img  class="ImageWithBlurHashTransition__Image-sc-cnbybj-2 ejAoa"> */}
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src="https://discovery-cdn.wolt.com/cities/tel-aviv/sections/3c685be2-fa7b-11eb-ad73-6a3c681210fe_whatsapp_image_2021_08_05_at_15.41.47__1__min.jpeg" />
                {/* <img class="ImageWithBlurHashTransition__Image-sc-cnbybj-2 ejAoa"> */}
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src="https://discovery-cdn.wolt.com/cities/tel-aviv/sections/c3d9db2a-6888-11ec-8b4f-821e7e6317fd_46577_h_banner_1400x810__sg3.jpg" />
                {/* <imgclass="ImageWithBlurHashTransition__Image-sc-cnbybj-2 ejAoa"> */}
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src="https://discovery-cdn.wolt.com/cities/tel-aviv/sections/9fbc7f7c-e796-11eb-9b3a-46a96bdfc4c2__________.jpeg" />
                {/* <img class="ImageWithBlurHashTransition__Image-sc-cnbybj-2 ejAoa"> */}
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src="https://discovery-cdn.wolt.com/cities/tel-aviv/sections/151b9792-2cdb-11ec-97b9-22cfd44ac649_________.jpeg" />
                {/* <img  class="ImageWithBlurHashTransition__Image-sc-cnbybj-2 ejAoa"> */}
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src="https://discovery-cdn.wolt.com/cities/tel-aviv/sections/5cab40fe-3266-11ec-a930-822863df41b5_1_min.jpg" />
                {/* <img src="" class="ImageWithBlurHashTransition__Image-sc-cnbybj-2 ejAoa"> */}
                {/* <p className="legend">Legend 2</p> */}
            </div>
        </Carousel>
    );
};


// ReactDOM.render(<HeroCarousel />, document.querySelector('.hero-carousel'));