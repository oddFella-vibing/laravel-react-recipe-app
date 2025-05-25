import { usePage } from "@inertiajs/react";
import React from "react";

const MealDetail = () => {
    const ingredientcount: number[] = Array.from(
        { length: 20 },
        (_, i) => i + 1
    );
    const { mealDetails }: any = usePage().props;
    return (
        <>
            <div className="h-max bg-blur rounded-3xl flex flex-row justify-around p-10 shadow-xl m-5 h-8/10 gap-10">
                <img
                    className="rounded-3xl max-h-[500px]"
                    width={500}
                    height={500}
                    src={mealDetails[0].strMealThumb}
                    alt="placeholder"
                />
                <div className="flex flex-col gap-5 text-white">
                    <h3>{mealDetails[0].strMeal}</h3>
                    <p>{mealDetails[0].strInstructions} </p>
                    <div className="flex flex-col gap-5">
                        <p>{mealDetails[0].strTags}</p>
                        <table className=" table-auto border-separate ">
                            <tbody>
                                {ingredientcount.map(
                                    (i) =>
                                        mealDetails[0][`strIngredient${i}`] !==
                                            "" && (
                                            <tr key={i}>
                                                <td>
                                                    {
                                                        mealDetails[0][
                                                            `strIngredient${i}`
                                                        ]
                                                    }
                                                </td>
                                                <td className="px-[20px]">
                                                    {
                                                        mealDetails[0][
                                                            `strMeasure${i}`
                                                        ]
                                                    }
                                                </td>
                                            </tr>
                                        )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MealDetail;
