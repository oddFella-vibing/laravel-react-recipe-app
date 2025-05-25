import React from "react";
import { EmblaOptionsType } from "embla-carousel";

import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButttons";
import useEmblaCarousel from "embla-carousel-react";
import SingleMeal from "./SingleMeal";
import { MealProps } from "@/propTypes";

type PropType = {
    slides: MealProps[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="embla">
            <div className="embla__controls">
                <div className="category_lable">Chicken</div>
                <div className="embla__buttons">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((meal, index) => (
                        <div className="embla__slide" key={index}>
                            {/* <div className="embla__slide__number">{index + 1}</div> */}
                            <SingleMeal
                                strMeal={meal.strMeal}
                                strMealThumb={meal.strMealThumb}
                                idMeal={meal.idMeal}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
