import React from "react";
import ListBoxCustom from "./ListBoxCustom";

export default function Filter() {
    return (
        <div className="w-full bg-slate-600 h-8 flex">
            <ListBoxCustom />
            <ListBoxCustom />
            <ListBoxCustom />
        </div>
    );
}
