import { useAppState } from "@/state/state";
import ListBoxCustom from "./ListBoxCustom";

type Props = {};

const ListBoxes = (props: Props) => {
    const state = useAppState((state) => state);
    return (
        <>
            <ListBoxCustom type={state.date} name="date" />
            <ListBoxCustom type={state.experience} name="experience" />
            <ListBoxCustom type={state.jobLocation} name="jobLocation" />
            <ListBoxCustom type={state.salary} name="salary" />
        </>
    );
};

export default ListBoxes;
