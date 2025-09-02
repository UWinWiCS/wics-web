import navBarLogo from '../../assets/NavBarLogo.png';
import discordBtn from '../../assets/DiscordBtn.png';
import githubBtn from '../../assets/GIthubBtn.png';
import picturesBtn from '../../assets/PicturesBtn.png';
import mailBtn from '../../assets/MailBtn.png';
import codeButton from '../../assets/CodeButton.png';

function Footer() {
    return (
        <footer className="bg-[#ffe2ef] flex flex-col justify-start items-center p-6 min-h-[20vh] relative">
            <div className="w-full flex justify-between items-start">
                <img
                    src={navBarLogo.src}
                    alt="Navbar Logo"
                    className="h-50 w-auto ml-[-2rem] mt-[-4rem]"
                />

                <div className="flex gap-6">
                    <a
                        href="https://discord.gg/your-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={discordBtn.src}
                            alt="Discord"
                            className="h-14 w-14 hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                    <a
                        href="https://github.com/UWinWiCS"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={githubBtn.src}
                            alt="Github"
                            className="h-14 w-14 hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                    <a href="/pictures">
                        <img
                            src={picturesBtn.src}
                            alt="Pictures"
                            className="h-14 w-14 hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                    <a href="mailto:yourmail@uwindsor.ca">
                        <img
                            src={mailBtn.src}
                            alt="Mail"
                            className="h-14 w-14 hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                </div>
            </div>

            <p className="mt-[-3.5rem] ml-[-73rem] text-sm text-[#FDA8C7] leading-tight text-center font-magra font-bold">
                © 2025 Women in Computer Science Club,
                <br />
                University of Windsor. All rights reserved.
            </p>

            <img
                src={codeButton.src}
                alt="Code Button"
                className="absolute bottom-6 right-6 h-14 w-14 cursor-pointer hover:scale-110 transition-transform duration-200"
            />
        </footer>
    );
}

export default Footer;
