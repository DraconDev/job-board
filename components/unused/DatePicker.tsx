"use client";
import { useAppState } from "@/state/state";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
    register?: UseFormRegister<FieldValues>;
}

const MyDatePicker = ({ register }: Props) => {
    const state = useAppState((state) => state);
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="w-full">
            {/* <DatePicker
                selected={startDate}
                className=" text-black p-2 text-lg rounded-md mb-4 w-full"
                onChange={(date: Date) => {
                    setStartDate(date);
                    state.updateUser({
                        ...state.user,
                        profile: {
                            education: {
                                endDate: date,
                            },
                        },
                    });
                }}
            /> */}
        </div>
    );
};

export default MyDatePicker;
