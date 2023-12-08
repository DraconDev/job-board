"use client";
import { useAppState } from "@/state/state";
import ListBoxCustom from "./ListBoxCustom";

type Props = {};

const ListBoxes = (props: Props) => {
    const state = useAppState((state) => state);

    const menus = [
        { name: "date", type: state.date },
        { name: "role", type: state.role },
        { name: "jobLocation", type: state.jobType },
        { name: "salary", type: state.salary },
    ];

    return (
        <>
            {menus.map((menu, index) => (
                <ListBoxCustom
                    key={index}
                    type={menu.type}
                    name={menu.name}
                />
            ))}
        </>
    );
};

export default ListBoxes;
