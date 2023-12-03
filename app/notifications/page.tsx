"use client";
import { useAppState } from "@/state/state";

type Props = {};

const Notifications = (props: Props) => {
    const state = useAppState((state) => state);
    return <div>Notifications</div>;
};

export default Notifications;
