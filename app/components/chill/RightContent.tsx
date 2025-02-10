import Image from "next/image";
import "./style.css";
interface RightContentTypeProps {
  className?: string;
}
import { useRouter } from "next/navigation";

const IDLists: Array<string> = [
  "What-is-SOL-Arena",
  "Whats-the-Vision",
  "What-Are-the-Key-Features",
  "High-Stakes-Gameplay-noCHILL-Crypto-and-Extraction",
  "Community-Driven-Competition-Represent-Your-Coins",
  "Accessible-for-All-Rewarding-for-Competitors",
  "Whats-the-Roadmap",
  "Why-Should-I-Own-CHILL",
  "Tokenomics",
  "Who-Are-Your-Partners",
  "How-Do-I-Participate",
  "Links",
];
//bg-[url('/assets/chill/Art.png')]
const RightContent: React.FC<RightContentTypeProps> = ({ className }) => {
  const navigator = useRouter();
  const handleScroll = () => {
    // Get the current scroll position
    // const currentScrollPosition = event.currentTarget.scrollTop;
    IDLists.forEach((e) => {
      const rect = document.getElementById(e)?.getBoundingClientRect();
      let active_item: HTMLElement | null = null;
      if (rect) {
        if (Math.abs(rect.top) < 10) {
          active_item = document.querySelector(`a[href="#${e}"]`);

          if (active_item) {
            document
              .querySelector("#right-bar")
              ?.querySelector(".active")
              ?.classList?.remove("active");
            active_item.classList.add("active");
          }
        }
      }
    });
  };
  return (
    <div
      id="right-content"
      onScroll={handleScroll}
      className={`${className} w-full h-[100vh] col-span-3 bg-cover bg-no-repeat overflow-auto scrollbar-hide relative z-20 bg-[100% 100%] bg-[url('/assets/chill/BG_img.png')]`}
    >
      <div className=" relative w-full h-[1000px] md:h-[100vh]">
        <div className=" h-[1000px] md:h-[90vh] overflow-hidden object-center relative mt-[-10px]">
          <Image
            src={"/assets/main1.webp"}
            alt=""
            width={1440}
            height={1000}
            className="max-w-[640px] sm:max-w-[1440px] absolute right-[50%] translate-x-[50%] translate-y-0 sm:translate-y-[-300px] "
          />
        </div>
        <div
          className=" mb-[-40px] md:mb-auto absolute bottom-0 w-full flex justify-center items-center font-[1000] bg-gradient-to-t from-[#00000000] via-[#051539,#051539,#051539,#051539] to-[#00000020,#00000020,#00000020,#00000020, #00000010, #00000000] text-white md:text-[60px] text-[40px]"
          style={{ textShadow: "0px 0px 50px # 00C4F5" }}
        >
          <div className="py-[80px] text-center">SOL Arena Whitepaper</div>
        </div>
      </div>
      <div className=" flex flex-col gap-0 w-full pb-40">
        <div
          className="w-full relative py-[20px] md:py-[80px]"
          id="What-is-SOL-Arena"
        >
          <div className="max-w-[1000px] m-auto text-white flex flex-col gap-12">
            <div className="relative h-fit">
              <Image
                src={"/assets/chill/Section1Title.png"}
                alt=""
                width={500}
                height={200}
                className=" w-[361px] h-[68px]"
              />
              <div className="tracking-tight absolute top-[50%] left-7 translate-y-[-50%] text-black md:text-[28px] text-[20px] font-semibold">
                What Is SOL Arena?
              </div>
            </div>
            <div className=" px-5 text-[16px]">
              SOL Arena is Snake on Solana. It combines the simplicity of the
              wildly popular slither.io with the thrill of high-stakes gameplay
              and real crypto rewards. Easy to pick up and play, it offers
              casual gamers a fun, accessible experience while challenging
              competitive players with depth and strategy. Compete to climb the
              leaderboards by collecting and extracting noCHILL from the Arena
              while representing your favorite crypto communities.
            </div>
          </div>
        </div>
        <div
          className=" w-full relative py-[20px] md:py-[80px]"
          id="Whats-the-Vision"
        >
          <div className="max-w-[1000px] m-auto text-white flex flex-col gap-12 relative z-20">
            <div className="relative h-fit">
              <Image
                src={"/assets/chill/Section2Title.png"}
                alt=""
                width={500}
                height={200}
                className=" w-[348px] h-[68px]"
              />
              <div className="  absolute top-[50%] left-7 translate-y-[-50%] text-black md:text-[28px] text-[20px] font-semibold">
                What’s the Vision?
              </div>
            </div>
            <div className=" px-5 text-[16px] space-y-8">
              <p>
                We’re trying to build a game that gets{" "}
                <i className=" font-bold">better</i> with web3. In our opinion,
                web3 games should have crypto integrated throughout, not just a
                token that is slapped on at the end. This means integrating the
                2 core values of crypto: <i className="font-bold">networks</i>{" "}
                (community) and <i className="font-bold">financialization</i>.
                Like early Facebook games that were inherently social
                (Farmville), or early mobile games that took advantage of the
                touch screen (Fruit Ninja, Angry Birds), we believe that early
                web3 games need to take advantage of networks (crypto
                communities) and financialization (financial risk/reward).
              </p>

              <p>
                We’ve built these elements into the heart of SOL Arena.
                Utilizing characters and teams sourced directly from the Solana
                ecosystem, crypto wagering that brings the high-stakes thrill of
                memecoin trading, delivered in a simple and easy-to-play snake
                game with proven game mechanics.
              </p>

              <p>
                Our vision is to create a new genre of gaming in web3 that
                merges the thrill and skill of games like poker with the
                accessibility and excitement of modern digital games.
              </p>
            </div>
          </div>
          <Image
            src={"/assets/chill/Eva1.png"}
            alt="Eva"
            width={246}
            height={390}
            className=" absolute right-0 bottom-0 z-10 opacity-20 md:opacity-70"
          />
        </div>
        <div
          className=" w-full relative py-[20px] md:py-[80px]"
          id="What-Are-the-Key-Features"
        >
          <div className="max-w-[1000px] m-auto text-white flex flex-col gap-12 relative z-20">
            <div
              className="relative h-fit"
              id="High-Stakes-Gameplay-noCHILL-Crypto-and-Extraction"
            >
              <Image
                src={"/assets/chill/Section2Title.png"}
                alt=""
                width={500}
                height={200}
                className=" w-[487px] h-[68px]"
              />
              <div className="  absolute top-[50%] left-7 translate-y-[-50%] text-black md:text-[28px] text-[20px] font-semibold">
                What Are the Key Features?
              </div>
            </div>
            <div className=" px-5 flex flex-col gap-12">
              <div>
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">
                  High-Stakes Gameplay: noCHILL, Crypto, and Extraction
                </h3>
                <div className=" text-[16px] space-y-8">
                  <p>
                    SOL Arena is designed to be an addicting and satisfying game
                    loop. Players enter the Arena and battle with other players
                    to collect noCHILL, the point scoring system used to climb
                    the leaderboard. To secure their noCHILL onto the
                    leaderboard, players must find and extract through wormholes
                    before other players can take them out and steal it for
                    themselves
                  </p>

                  <p>
                    For players looking to up the stakes, High Roller Mode
                    requires players to wager crypto to enter the Arena, where
                    they can kill and loot other players to take their crypto.
                    Extract with your loot to turn those high-stakes battles
                    into crypto profits.
                  </p>
                  <div>
                    <Image
                      src={"/assets/chill/high-stack.webp"}
                      alt=""
                      width={1920}
                      height={1080}
                    />
                  </div>
                </div>
              </div>
              <div
                id="Community-Driven-Competition-Represent-Your-Coins"
                className="mt-[-80px] pt-[80px]"
              >
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">
                  Community-Driven Competition: Represent Your Coins
                </h3>
                <div className=" text-[16px] space-y-8">
                  <p>
                    Players join teams to represent real crypto tokens,
                    fostering collaboration and rivalries that add a social and
                    strategic layer to gameplay. By playing for your team, you
                    contribute to its leaderboard rank, building a sense of
                    pride and loyalty while competing for dominance in the
                    Arena.
                  </p>
                  <div>
                    <Image
                      src={"/assets/chill/image1098.webp"}
                      alt=""
                      width={1344}
                      height={757}
                    />
                  </div>
                </div>
              </div>
              <div
                id="Accessible-for-All-Rewarding-for-Competitors"
                className="mt-[-80px] pt-[80px]"
              >
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">
                  Accessible for All, Rewarding for Competitors
                </h3>
                <div className=" text-[16px] space-y-8">
                  <p>
                    SOL Arena’s simplicity makes it perfect for casual players
                    who enjoy cozy, laid-back gameplay with easy-to-learn
                    mechanics and quick, fun matches. Casual players can farm
                    noCHILL, earn rewards, and collect in-game resources to
                    contribute to the game economy by trading with competitive
                    players.
                  </p>
                  <p>
                    At the same time, competitive players will find layers of
                    strategic depth, utilizing power-ups and teamwork to
                    outmaneuver opponents and dominate leaderboards, all while
                    winning real crypto.
                  </p>
                  <div>
                    <video width="1000" height="1000" controls>
                      <source
                        src="/assets/chill/video/SA_Teaser_Trimmed.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={"/assets/chill/chill-left-1.png"}
            alt="effect"
            width={209}
            height={495}
            className=" absolute left-0 top-[40%] opacity-[20%] md:opacity-70"
          />
          <Image
            src={"/assets/chill/chill-right-1.png"}
            alt="effect"
            width={209}
            height={495}
            className=" absolute right-0 top-[40%] opacity-[20%] md:opacity-70"
          />
        </div>
        <div
          className=" w-full relative py-[20px] md:py-[80px]"
          id="Whats-the-Roadmap"
        >
          <div className="max-w-[1000px] m-auto text-white relative z-20 flex flex-col gap-12">
            <div className="relative h-fit">
              <Image
                src={"/assets/chill/Section1Title.png"}
                alt=""
                width={500}
                height={200}
                className=" w-[403px] h-[68px]"
              />
              <div className="tracking-tight absolute top-[50%] left-7 translate-y-[-50%] text-black md:text-[28px] text-[20px] font-semibold">
                What’s the Roadmap?
              </div>
            </div>
            <div className=" px-5 text-[16px]">
              <ol className="relative border-s-[2px] border-s-[#5CFFE2]">
                <li className="mb-10 ms-4">
                  <svg
                    viewBox="0 0 17 17"
                    className="absolute w-6 h-6 rounded-full -mt-1 -start-3"
                  >
                    <circle cx="8" cy="8.62549" r="8" fill="#0B217D" />
                    <circle
                      cx="8"
                      cy="8.62549"
                      r="6"
                      fill="#5CFFE2"
                      stroke="#5CFFE2"
                      strokeWidth="0.5"
                    />
                    <circle cx="8" cy="8.62549" r="2" fill="#0B217D" />
                  </svg>
                  <time className=" absolute text-[16px] font-normal leading-none text-[#41FFC6] dark:text-gray-500">
                    Q2 2024
                  </time>
                  <ul className="pt-6 px-5">
                    <li className="mb-4 text-base font-normal list-disc">
                      Project Kick-off (April)
                    </li>
                  </ul>
                </li>
                <li className="mb-10 ms-4">
                  <svg
                    viewBox="0 0 17 17"
                    className="absolute w-6 h-6 rounded-full -mt-1 -start-3"
                  >
                    <circle cx="8" cy="8.62549" r="8" fill="#0B217D" />
                    <circle
                      cx="8"
                      cy="8.62549"
                      r="6"
                      fill="#5CFFE2"
                      stroke="#5CFFE2"
                      strokeWidth="0.5"
                    />
                    <circle cx="8" cy="8.62549" r="2" fill="#0B217D" />
                  </svg>
                  <time className=" absolute text-[16px] font-normal leading-none text-[#41FFC6] dark:text-gray-500">
                    Q3 2024
                  </time>
                  <ul className="pt-6 px-5">
                    <li className="mb-4 text-base font-normal list-disc">
                      Launched Open Beta at Solana Breakpoint (September)
                    </li>
                    <li className="mb-4 text-base font-normal list-disc">
                      Start of Season 0: Extract to Airdrop
                    </li>
                  </ul>
                </li>
                <li className="mb-10 ms-4">
                  <svg
                    viewBox="0 0 17 17"
                    className="absolute w-6 h-6 rounded-full -mt-1 -start-3"
                  >
                    <circle cx="8" cy="8.62549" r="8" fill="#0B217D" />
                    <circle
                      cx="8"
                      cy="8.62549"
                      r="6"
                      fill="#5CFFE2"
                      stroke="#5CFFE2"
                      strokeWidth="0.5"
                    />
                    <circle cx="8" cy="8.62549" r="2" fill="#0B217D" />
                  </svg>
                  <time className=" absolute text-[16px] font-normal leading-none text-[#41FFC6] dark:text-gray-500">
                    Q4 2024
                  </time>
                  <ul className="pt-6 px-5">
                    <li className="mb-4 text-base font-normal list-disc">
                      Gameplay Polish: Enhanced mechanics and visual
                      improvements based on player feedback
                    </li>
                  </ul>
                </li>
                <li className="mb-10 ms-4">
                  <svg
                    viewBox="0 0 20 21"
                    className="absolute w-6 h-6 rounded-full -mt-1 -start-3"
                  >
                    <circle
                      cx="10"
                      cy="10.6255"
                      r="10"
                      fill="url(#paint0_linear_406_11961)"
                      fillOpacity="0.5"
                    />
                    <circle
                      cx="10"
                      cy="10.6255"
                      r="6"
                      fill="#0B217D"
                      stroke="#5CFFE2"
                      strokeWidth="0.5"
                    />
                    <circle cx="10" cy="10.6255" r="2" fill="#5CFFE2" />
                    <defs>
                      <linearGradient
                        id="paint0_linear_406_11961"
                        x1="2.79397e-07"
                        y1="20.6255"
                        x2="19.3624"
                        y2="0.0261758"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5CFFE2" />
                        <stop offset="1" stopColor="#B2FF59" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <time className=" absolute text-[16px] font-normal leading-none text-[#41FFC6] dark:text-gray-500">
                    Q1 2025
                  </time>
                  <ul className="pt-6 px-5">
                    <li className="mb-4 text-base font-normal list-disc">
                      Onboarding Improvements: Improve and simplify the user
                      onboarding experience for seamless entry
                    </li>
                    <li className="mb-4 text-base font-normal list-disc">
                      High Roller Mode: A key feature of SOL Arena, players can
                      now wager real crypto in high-stakes matches
                    </li>
                    <li className="mb-4 text-base font-normal list-disc">
                      Challenger NFT Release: Launch an NFT collection featuring
                      our new revamped art style in an exclusive limited-time
                      cosmetics, only available for our earliest supporters
                    </li>
                    <li className="mb-4 text-base font-normal list-disc">
                      $CHILL Token Launch: Launch the $CHILL token which will be
                      integral to multiple in-game economic systems
                    </li>
                  </ul>
                </li>
                <li className="mb-10 ms-4">
                  <svg
                    viewBox="0 0 17 17"
                    className="absolute w-6 h-6 rounded-full -mt-1 -start-3"
                  >
                    <circle cx="8" cy="8.62549" r="8" fill="#0B217D" />
                    <circle
                      cx="8"
                      cy="8.62549"
                      r="6"
                      fill="#0B217D"
                      stroke="#7A8098"
                      strokeWidth="0.5"
                    />
                    <circle cx="8" cy="8.62549" r="2" fill="#7A8098" />
                  </svg>
                  <time className=" absolute text-[16px] font-normal leading-none text-[#41FFC6] dark:text-gray-500">
                    Q2 2025
                  </time>
                  <ul className="pt-6 px-5">
                    <li className="mb-4 text-base font-normal list-disc">
                      Emotes: Improve in-game communication and social
                      engagement through an emote system
                    </li>
                    <li className="mb-4 text-base font-normal list-disc">
                      Gacha and Shop: Exclusive cosmetics and in-game purchases
                    </li>
                    <li className="mb-4 text-base font-normal list-disc">
                      Seasonal Battle Pass: Seasonal prize pools and rewards to
                      keep players engaged season after season
                    </li>
                  </ul>
                </li>
                <li className="mb-10 ms-4">
                  <svg
                    viewBox="0 0 17 17"
                    className="absolute w-6 h-6 rounded-full -mt-1 -start-3"
                  >
                    <circle cx="8" cy="8.62549" r="8" fill="#0B217D" />
                    <circle
                      cx="8"
                      cy="8.62549"
                      r="6"
                      fill="#0B217D"
                      stroke="#7A8098"
                      strokeWidth="0.5"
                    />
                    <circle cx="8" cy="8.62549" r="2" fill="#7A8098" />
                  </svg>
                  <time className=" absolute text-[16px] font-normal leading-none text-[#41FFC6] dark:text-gray-500">
                    Q3 2025
                  </time>
                  <ul className="pt-6 px-5">
                    <li className="mb-4 text-base font-normal list-disc">
                      Questing and Leveling: Long-term goals and objectives to
                      give players a sense of accomplishment and progression
                    </li>
                    <li className="mb-4 text-base font-normal list-disc">
                      Guilds and Social: Strengthen team and social play with
                      collaborative features
                    </li>
                    <li className="mb-4 text-base font-normal list-disc">
                      PvE and Game Economy: Expand the game economy with
                      resource-based challenges and PvE content
                    </li>
                  </ul>
                </li>
                <li className="pb-5 ms-4">
                  <svg
                    viewBox="0 0 17 17"
                    className="absolute w-6 h-6 rounded-full -mt-1 -start-3"
                  >
                    <circle cx="8" cy="8.62549" r="8" fill="#0B217D" />
                    <circle
                      cx="8"
                      cy="8.62549"
                      r="6"
                      fill="#0B217D"
                      stroke="#7A8098"
                      strokeWidth="0.5"
                    />
                    <circle cx="8" cy="8.62549" r="2" fill="#7A8098" />
                  </svg>
                  <time className=" absolute text-[16px] font-normal leading-none text-[#41FFC6] dark:text-gray-500">
                    Q4 2025
                  </time>
                  <ul className="pt-6 px-5">
                    <li className="mb-4 text-base font-normal list-disc">
                      Native Mobile Games: Launch on iOS and Android for global
                      accessibility
                    </li>
                  </ul>
                </li>
              </ol>
              <div className=" relative -translate-y-3">
                <svg
                  viewBox="0 0 17 17"
                  className="absolute w-6 h-6 rounded-full -mt-1 -start-3"
                >
                  <circle cx="8" cy="8.62549" r="8" fill="#0B217D" />
                  <circle
                    cx="8"
                    cy="8.62549"
                    r="6"
                    fill="#0B217D"
                    stroke="#7A8098"
                    strokeWidth="0.5"
                  />
                  <circle cx="8" cy="8.62549" r="2" fill="#7A8098" />
                </svg>
                <div className=" ms-4">
                  <time className=" absolute text-[16px] font-normal leading-none text-[#41FFC6] dark:text-gray-500">
                    Beyond 2025
                  </time>
                  <ul className="pt-6 px-5">
                    <li className="mb-4 text-base font-normal list-disc">
                      Development of additional game modes
                    </li>
                    <li className="mb-4 text-base font-normal list-disc">
                      Growing the IP with partnerships with web2 brands
                    </li>
                    <li className="mb-4 text-base font-normal list-disc">
                      Expand into more markets with localization
                    </li>
                  </ul>
                </div>
              </div>
              <i className=" text-[#CAD4EF]">
                Note: Roadmap plans are likely to change to adapt to player
                feedback and data, ensuring we deliver the right features at the
                right time.
              </i>
            </div>
          </div>
          <Image
            src={"/assets/chill/butterfly-1.png"}
            alt="butterfly"
            width={82}
            height={98}
            className=" absolute left-[5%] top-[60%] opacity-[20%] md:opacity-70"
          />
          <Image
            src={"/assets/chill/butterfly-2.png"}
            alt="butterfly"
            width={40}
            height={48}
            className=" absolute right-[10%] top-[40%] opacity-[20%] md:opacity-70"
          />
        </div>
        <div
          className=" w-full relative py-[20px] md:py-[80px]"
          id="Why-Should-I-Own-CHILL"
        >
          <div className="max-w-[1000px] m-auto text-white flex flex-col gap-12">
            <div className="relative h-fit">
              <Image
                src={"/assets/chill/Section2Title.png"}
                alt=""
                width={500}
                height={200}
                className=" w-[487px] h-[68px]"
              />
              <div className="  absolute top-[50%] left-7 translate-y-[-50%] text-black md:text-[28px] text-[20px] font-semibold">
                Why Should I Own $CHILL?
              </div>
            </div>
            <div className=" px-5 flex flex-col gap-12">
              <div>
                <div className=" text-[16px] space-y-8">
                  <div>
                    $CHILL is a product in of itself, designed to capture the
                    value across our products and brand through entertainment
                    and utility.
                  </div>
                  <ul className=" list-decimal pl-5">
                    <li>Entertainment: Social, comic, and animated content.</li>
                    <li>
                      Utility: Stake and play for in-game resources and $CHILL
                      rewards.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="Tokenomics" className="mt-[-80px] pt-[80px]">
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">Tokenomics</h3>
                <div className=" text-[16px] space-y-8">
                  <ul className=" list-disc pl-5">
                    <li>25% Team and Advisors</li>
                    <li>31.19% Investors</li>
                    <li>23.81% Community</li>
                    <li>10% Public Launch</li>
                    <li>10% Airdrop</li>
                  </ul>
                  <div>
                    <Image
                      src={"/assets/chill/image1199.webp"}
                      alt=""
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className=" text-[#CAD4EF] italic">
                    Note: Allocation plans are subject to change to adapt to
                    market conditions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" w-full relative py-[20px] md:py-[80px]"
          id="Who-Are-Your-Partners"
        >
          <Image
            src={"/assets/chill/TokenIcon.png"}
            alt=""
            width={100}
            height={100}
            className=" absolute top-[10%] md:top-[50%] -rotate-45 w-[160px] h-[160px] hidden md:block"
          />
          <Image
            src={"/assets/chill/TokenIcon.png"}
            alt=""
            width={100}
            height={100}
            className=" absolute -rotate-45 top-[20%] md:top-[60%] left-[10%] w-[120px] h-[120px] hidden md:block"
          />
          <Image
            src={"/assets/chill/TokenIcon.png"}
            alt=""
            width={100}
            height={100}
            className=" absolute top-[50%] md:top-[80%] w-[140px] h-[140px] left-[5%] hidden md:block"
          />
          <Image
            src={"/assets/chill/TokenIcon.png"}
            alt=""
            width={100}
            height={100}
            className=" absolute top-[10%] md:top-[60%] right-0 w-[160px] h-[160px] hidden md:block"
          />
          <Image
            src={"/assets/chill/TokenIcon.png"}
            alt=""
            width={100}
            height={100}
            className=" absolute top-[30%] md:top-[80%] right-[8%] -rotate-45 w-[120px] h-[120px] hidden md:block"
          />
          <Image
            src={"/assets/chill/TokenIcon.png"}
            alt=""
            width={100}
            height={100}
            className=" absolute top-[50%] md:top-[90%] right-[4%] w-[120px] h-[120px] hidden md:block"
          />
          <div className="max-w-[1000px] m-auto text-white flex flex-col gap-12 relative z-20">
            <div className="relative h-fit">
              <Image
                src={"/assets/chill/Section2Title.png"}
                alt=""
                width={500}
                height={200}
                className=" w-[426px] h-[68px]"
              />
              <div className="  absolute top-[50%] left-7 translate-y-[-50%] text-black md:text-[28px] text-[20px] font-semibold">
                Who Are Your Partners?
              </div>
            </div>
            <div className=" px-5 flex flex-col gap-12">
              <div>
                <div className=" text-[16px] space-y-8">
                  <div>
                    SOL Arena collaborates with some of the most exciting NFT,
                    memecoin, and utility token communities in Web3, bringing
                    unique characters, lore, and artwork into the game to foster
                    vibrant community engagement and enrich the player
                    experience. As a Solana-native team that’s believed in the
                    ecosystem since 2021, we’re proud to partner with leading
                    projects and investors:
                  </div>
                  <ul className=" list-decimal pl-5">
                    <li>Entertainment: Social, comic, and animated content.</li>
                    <li>
                      Utility: Stake and play for in-game resources and $CHILL
                      rewards.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className=" text-[16px] space-y-8">
                  <ul className="list-disc pl-5">
                    <li className="text-[#41FFC6]">
                      <strong>Collaborations:</strong>
                      <ul className="pl-5 text-white list-disc">
                        <li>
                          <strong>Tokens</strong>: Solana, Bonk, Wif, Jupiter,
                          Moutai, Solcasino, Sharky, Cloud, Popcat, Mumu, Chonky
                          and more coming…
                        </li>
                        <li>
                          <strong>NFTs and other Projects</strong>: SharkyFi,
                          Solana Monkey Business, Phantom, Tensor, Solcasino,
                          Solana Sensei, Asset Dash and more coming…
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="list-disc pl-5">
                    <li className="text-[#41FFC6]">
                      <strong>Investors:</strong>
                      <ul className="pl-5 text-white list-disc">
                        <li>
                          <strong>Leads</strong>: Solana Ventures, Crypto.com
                          Capital, and Big Brain Holdings
                        </li>
                        <li>
                          <strong>Investors</strong>: Spartan Group, Animoca
                          Brands, Griffin Gaming Partners, Jump Capital,
                          Morningstar Ventures, W3GG, Shima Capital,
                          MonkeVentures, Zentry, Diamond Hand Ventures,
                          Ancient8, Avocado Guild, SNACKCLUB, UniX Gaming,
                          Overwolf, Double Peak, DAOvergence, Old Fashion
                          Research, Gate.io Labs, FOMOPay Ventures, Magic Few,
                          A&T Capital, Infinity Ventures Crypto, PKO
                          Investments, V Ventures, and Mighty Jaxx.
                        </li>
                        <li>
                          <strong>KOLs</strong>: CryptoBoost, CryptoLark,
                          Tokensuite, Coin Club Japan, Double Top, Daku, Top7,
                          CryptoMatrix, CryptoZombie, CryptoRand, CryptoRank,
                          Altcoin Daily, CryptoNews FR, ICOAnalytics, AshWSB,
                          Coin.fyi, Coin Atlas, Cryptus, Crypto Futur, Coin
                          Muhendisi, Kyros, Generation Crypto, Young &
                          Investing, Whitelist, CryptoNation, WiseAdvise, and
                          Vendetta.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div>
                    <Image
                      src={"/assets/chill/our-partner.webp"}
                      alt=""
                      width={1920}
                      height={1080}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" w-full relative py-[20px] md:py-[80px]"
          id="How-Do-I-Participate"
        >
          <div className="max-w-[1000px] m-auto text-white flex flex-col gap-12 relative z-20">
            <div className="relative h-fit">
              <Image
                src={"/assets/chill/Section2Title.png"}
                alt=""
                width={500}
                height={200}
                className=" w-[426px] h-[68px]"
              />
              <div className="  absolute top-[50%] left-7 translate-y-[-50%] text-black md:text-[28px] text-[20px] font-semibold">
                How Do I Participate?
              </div>
            </div>
            <div className=" px-5 flex flex-col gap-12">
              <div>
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">
                  Season 0: Extract to Airdrop
                </h3>
                <div className=" text-[16px] space-y-8">
                  Start playing SOL Arena today at{" "}
                  <a
                    href="https://play.solarena.io/"
                    target="_blank"
                    className="underline"
                  >
                    play.solarena.io
                  </a>{" "}
                  on any browser (Mac or PC) or through a mobile Solana wallet
                  app. Collect and extract noCHILL to climb the leaderboard and
                  qualify for the $CHILL airdrop when the token launches.
                </div>
              </div>
            </div>
            <div className=" pl-5 flex flex-col gap-12">
              <div className=" flex flex-col gap-6">
                <h3 className=" text-[18px] text-[#41FFC6]">Hold our NFTs</h3>
                <div className=" text-[16px] space-y-8">
                  Own a piece of SOL Arena by holding NFTs from the{" "}
                  <a
                    href="https://magiceden.io/marketplace/chillchat"
                    className="underline"
                    target="_blank"
                  >
                    Chillchat Origin collection
                  </a>{" "}
                  or the upcoming Challenger collection. These NFTs not only
                  grant exclusive in-game cosmetics but also guarantee your
                  eligibility for the $CHILL airdrop.
                </div>
                <ul className=" list-decimal pl-5 space-y-6">
                  <li>
                    Origins
                    <ul className=" list-[lower-alpha] pl-5">
                      <li>Soft stake to earn $CHILL airdrop rewards</li>
                      <li>Hard stake to earn exclusive in-game currencies</li>
                    </ul>
                  </li>
                  <li>
                    Challengers
                    <ul className=" list-[lower-alpha] pl-5">
                      <li>Playable in-game as a limited time cosmetic</li>
                      <li>Soft stake to earn $CHILL airdrop rewards</li>
                      <li>Multiply your noCHILL extractions</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className=" flex flex-col gap-6">
                <h3 className=" text-[18px] text-[#41FFC6]">
                  Buy $CHILL at Launch
                </h3>
                <div className=" text-[16px] space-y-8">
                  Believe in the vision of SOL Arena? You can join us on our
                  journey and become a part of the SOL Arena ecosystem by
                  purchasing $CHILL during our token launch. Stay tuned for
                  official launch details and secure your stake in the future of
                  Web3 gaming.
                </div>
              </div>
            </div>
          </div>
          <Image
            src={"/assets/chill/coins-2.png"}
            alt="coin"
            width={445}
            height={335}
            className=" hidden md:block absolute left-[-20%] bottom-[-10%] opacity-70"
          />
          <Image
            src={"/assets/chill/coins-1.png"}
            alt="coin"
            width={445}
            height={335}
            className=" hidden md:block absolute right-[-10%] bottom-[-10%] opacity-70"
          />
        </div>
        <div className=" w-full relative py-[20px] md:py-[80px]" id="Links">
          <div className="max-w-[1000px] w-full m-auto text-white flex flex-col gap-12">
            <div className="relative h-fit">
              <Image
                src={"/assets/chill/Section2Title.png"}
                alt=""
                width={500}
                height={200}
                className=" w-[147px] h-[68px]"
              />
              <div className="  absolute top-[50%] left-7 translate-y-[-50%] text-black md:text-[28px] text-[20px] font-semibold">
                Links
              </div>
            </div>
            <div className=" px-5 flex flex-wrap gap-6 md:gap-10">
              <div
                className=" flex flex-row gap-3 items-center cursor-pointer"
                onClick={() => {
                  navigator.push("https://discord.com/invite/chillchatgames");
                }}
              >
                <Image
                  src={"/assets/chill/ButtonIcon-Discord.png"}
                  alt=""
                  width={48}
                  height={48}
                />
                <div className=" text-[#41FFC6] text-[18px]">
                  Discord
                </div>
              </div>
              <div
                className=" flex flex-row gap-3 items-center md:justify-start justify-between cursor-pointer"
                onClick={() => {
                  navigator.push("https://x.com/solarena_io");
                }}
              >
                <Image
                  src={"/assets/chill/ButtonIcon-Twitter.png"}
                  alt=""
                  width={48}
                  height={48}
                />
                <div className=" text-[#41FFC6] text-[18px] ">
                  X
                </div>
              </div>
              <div
                className=" flex flex-row gap-3 items-center cursor-pointer"
                onClick={() => {
                  navigator.push("https://t.me/solarenaio");
                }}
              >
                <Image
                  src={"/assets/chill/ButtonIcon-Telegram.png"}
                  alt=""
                  width={48}
                  height={48}
                />
                <div className=" text-[#41FFC6] text-[18px]">
                  Telegram
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightContent;
