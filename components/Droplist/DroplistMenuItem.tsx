import Link from "next/link";

type Props = {
    text: string;
    action?: () => void;
    route?: string;
};

const DroplistMenuItem = ({ text, action, route }: Props) => {
    return (
        <Link
            href={route ? route : "#"}
            onClick={action ?? action}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-white  "
        >
            {text}
        </Link>
    );
};

export default DroplistMenuItem;
