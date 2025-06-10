import { discordLink, letterboxdLink, leetCodeLink, instagramLink, onvoLink } from "../../utils/constructUrls";

export default function Other() {
    return (
        <div className="flex flex-col space-y-8">
            <p>Outside of software, I&apos;m a movie enjoyer here&apos;s my
                <span> </span>
                <a href={letterboxdLink} target="_blank"
                    className="underline hover:text-gray-400"
                >Letterboxd profile</a>
                .
                <br />
                I Love games too, especially story-driven ones this is my <a href={process.env.GAME_LIBRARY_LINK} target="_blank" className="underline hover:text-gray-400">Game library</a>.
                <br />
            </p>
            <p>
                You can also find me on
                <span> </span>
                <a href={discordLink} target="_blank" className="underline hover:text-gray-400">
                    Discord
                </a>
                <span> </span>
                ,
                <span> </span>
                <a href={leetCodeLink} target="_blank" className="underline hover:text-gray-400">LeetCode</a>
                <span> </span>
                ,
                <span> </span>
                <a href={onvoLink} target="_blank" className="underline hover:text-gray-400">ONVO</a>
                <span> </span>
                ,
                <span> </span>
                <a href={instagramLink} target="_blank" className="underline hover:text-gray-400">
                    Instagram
                </a>
            </p>
        </div>
    )
} 