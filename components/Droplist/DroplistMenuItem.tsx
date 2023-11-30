type Props = {
    text: string;
    action: () => void;
};

const DroplistMenuItem = ({ text, action }: Props) => {
    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                action();
            }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
            {text}
        </a>
    );
};

export default DroplistMenuItem;
