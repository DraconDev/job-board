type Props = {
    children?: React.ReactNode;
    close: () => void;
};

const MobileSlideWrapper = ({ close, children }: Props) => {
    return (
        <div
            className="relative"
            onClick={close}
        >
            <div className="fixed top-0 left-0 w-screen h-screen  bg-primary p-2">
                {children && children}
            </div>
        </div>
    );
};

export default MobileSlideWrapper;
