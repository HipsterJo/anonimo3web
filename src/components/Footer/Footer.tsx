type FooterProps = {
    className?: string;
};

const Footer:React.FC<FooterProps> = ({className}) => {
    return(
        <div className={className + " mt-6 h-[100px] w-full bg-color bg-[#1B1E22] bottom-0  px-9 py-2"}>
            <h4 className="text-white">Anonimo</h4>
            <p className="text-[#8d8d8d]">
                    Copyright © anonimo.xyz All Rights Reserved
        This site does not store any files on its server. All contents are provided by non-affiliated third parties.
            </p>
        </div>
    )
}


export default Footer;