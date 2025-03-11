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
  "Whats-the-Roadmap",
  "Why-Should-I-Own-CHILL",
  "Tokenomics",
  "Who-Are-Your-Partners",
  "How-Do-I-Get-a-$CHILL-Allocation",
  "Season-and-Season-Extract-to-Airdrop",
  "Hold-our-NFTs",
  "TaskOn-Questing",
  "Discord-Daily-Quests",
  "Buy-$CHILL-at-Launch",
  "SNAPSHOT-DATE-26th-March-2025",
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
          className="w-full relative py-[100px] -mt-[80px] md:-mt-[90px] md:py-[90px]"
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
          className=" w-full relative py-[100px] -mt-[150px] md:-mt-[110px] md:py-[90px]"
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
          className=" w-full relative py-[100px] -mt-[150px] md:-mt-[110px] md:py-[90px]"
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
                      src={"/assets/chill/241111_SA_Gameplayloop_newstyle.webp"}
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
          className=" w-full relative py-[100px] -mt-[150px] md:-mt-[110px] md:py-[90px]"
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
              <div className="text-[18px] mb-8">
              Our roadmap is planned with players and investors in mind. Our goal is to continually improve player engagement and rewards with each update, building a sustainable foundation for our growth and delivering long-term value for our players, community, and supporters.
              </div>
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
                      cosmetics, only available for our earliest supporters{" "}
                      <a
                        href="https://magiceden.io/marketplace/sol_arena_challengers"
                        target="_blank"
                        className="underline"
                      >
                        Available NOW on Magic Eden
                      </a>
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
          className=" w-full relative py-[100px] -mt-[150px] md:-mt-[110px] md:py-[90px]"
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
                    <li>
                      Entertainment:
                      <ul className=" list-disc pl-6">
                        <li>Social, comic, and animated content.</li>
                      </ul>
                    </li>
                    <li>
                      Utility:
                      <ul className=" list-disc pl-6">
                        <li>Stake and play for in-game resources.</li>
                        <li>
                          Exclusive buy-in currency for{" "}
                          <a
                            href="https://chillchat.notion.site/18b2b901b5f9804a9decf598ef28f75e?pvs=25#18b2b901b5f9817fa0b0e17ba9534134"
                            className=" underline"
                            target="_blank"
                          >
                            Higher Roller Mode
                          </a>
                          .
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  src={"/assets/chill/image.webp"}
                  alt=""
                  className="mb-3"
                  width={1000}
                  height={1000}
                />
                <i className=" text-[#CAD4EF]">
                  <b>$CHILL</b> is a token designed for in-game use only. It has
                  no investment value and is not a financial product.
                </i>
              </div>
              <div id="Tokenomics" className="mt-[-90px] pt-[70px]">
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">Tokenomics</h3>
                <div className=" text-[16px] space-y-2">
                  {/* <ul className=" list-disc pl-5">
                    <li>25% Team and Advisors</li>
                    <li>31.19% Investors</li>
                    <li>23.81% Community</li>
                    <li>10% Public Launch</li>
                    <li>10% Airdrop</li>
                  </ul> */}
                  <div className="">
                    <Image
                      src={"/assets/chill/CHILL-Allocation.webp"}
                      alt=""
                      className=" mb-4"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <i className=" text-[#CAD4EF] italic">
                    Disclaimer: Allocation plans are subject to change to adapt
                    to market conditions.
                  </i>
                  <div className="">
                    <Image
                      src={"/assets/chill/image-chat.webp"}
                      alt=""
                      className=" mb-4"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <i className=" text-[#CAD4EF] italic">
                    Disclaimer: Distribution schedules are subject to change to
                    adapt to market conditions.
                  </i>
                  <table className=" text-[12px] sm:text-[16px]">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Allocation</th>
                        <th>Unlock Schedule</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Launch Liquidity</td>
                        <td>3%</td>
                        <td>Fully unlocked at launch</td>
                      </tr>
                      <tr>
                        <td>Community Reserve</td>
                        <td>28.81%</td>
                        <td>Fully unlocked at launch</td>
                      </tr>
                      <tr>
                        <td>Airdrop</td>
                        <td>17%</td>
                        <td>
                          SOL Arena Players (10%)
                          <ul>
                            <li>
                              - 5% Season 0: Day 1 unlock, vested over 3 months
                            </li>
                            <li>- 5% Season 0.5: Future allocation</li>
                          </ul>
                          Origins (6%): Day 1 unlock, vested over 3
                          months <br />
                          Challengers (1%): Day 1 unlock, vested over 3
                          months
                        </td>
                      </tr>
                      <tr>
                        <td>Team & Advisors</td>
                        <td>20%</td>
                        <td>
                          1-year cliff, 20% unlock after cliff, then linear
                          vesting over 12 months
                        </td>
                      </tr>
                      <tr>
                        <td>Investors</td>
                        <td>31.19%</td>
                        <td>
                          Non-US Investors: 3-month cliff, then 100%
                          unlock
                          <br /> US Investors: 1-year cliff, then 100%
                          unlock
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="Launch-Liquidity" className="mt-[-90px] pt-[60px]">
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">
                  Launch Liquidity (3%)
                </h3>
                <div className=" text-[16px] space-y-2">
                  3% of the total supply is set aside for liquidity pools to
                  ensure smooth trading with deep liquidity.
                </div>
              </div>

              <div id="Community-Reserve" className="mt-[-90px] pt-[60px]">
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">
                  Community Reserve (28.81%)
                </h3>
                <div className=" text-[16px] space-y-2">
                  28.81% of the total supply is managed by the Chillchat Team to
                  support SOL Arena’s long-term growth. This reserve will be
                  used for strategic initiatives like future airdrops and
                  expanding the ecosystem.
                </div>
              </div>

              <div id="Airdrop" className="mt-[-90px] pt-[60px]">
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">
                  Airdrop (17%)
                </h3>
                <div className=" text-[16px] space-y-2">
                  <div>
                    17% of the total supply is allocated to airdrops, rewarding
                    early adopters and active participants in SOL Arena.
                  </div>
                  <ul className=" list-disc pl-5">
                    <li>
                      Unlock Schedule:
                      <ul className=" list-[circle] pl-5">
                        <li>
                          SOL Arena Players (10%)
                          <ul className=" list-[square] pl-5">
                            <li>5% - Season 0</li>
                            <li>5% - Season 0.5</li>
                          </ul>
                        </li>
                        <li>Origins (6%)</li>
                        <li>Challengers (1%)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="Team" className="mt-[-90px] pt-[60px]">
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">Team (20%)</h3>
                <div className=" text-[16px] space-y-2">
                  20% of the total supply is allocated to the team who have been
                  building at Chillchat for more than three years.
                </div>
              </div>

              <div id="Investors" className="mt-[-90px] pt-[60px]">
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">
                  Investors (31.19%)
                </h3>
                <div className=" text-[16px] space-y-2">
                  31.19% of the total supply was sold to investors in 2022
                  through $10M and $50M funding rounds.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" w-full relative py-[100px] -mt-[150px] md:-mt-[110px] md:py-[90px]"
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
                  {/* <ul className=" list-decimal pl-5">
                    <li>Entertainment: Social, comic, and animated content.</li>
                    <li>
                      Utility: Stake and play for in-game resources and $CHILL
                      rewards.
                    </li>
                  </ul> */}
                </div>
              </div>
              <div>
                <div className=" text-[16px] -mt-[30px] space-y-4">
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
          className=" w-full relative py-[100px] -mt-[150px] md:-mt-[110px] md:py-[90px]"
          id="How-Do-I-Get-a-$CHILL-Allocation"
        >
          <div className="max-w-[1000px] m-auto text-white flex flex-col gap-12 relative z-20">
            <div className="relative h-fit">
              <Image
                src={"/assets/chill/Section2Title.png"}
                alt=""
                width={700}
                height={200}
                className=" w-[536px] h-[68px]"
              />
              <div className="  absolute top-[50%] left-7 translate-y-[-50%] text-black md:text-[28px] text-[20px] font-semibold">
                How Do I Get a $CHILL Allocation?
              </div>
            </div>
            <div className=" px-5 flex flex-col gap-12 -mt-[80px] pt-[80px]" id="Season-and-Season-Extract-to-Airdrop">
              <div>
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">
                  Season 0 and Season 0.5: Extract to Airdrop
                </h3>
                <div className=" text-[16px] space-y-8">
                  <i className=" underline">more noCHILL = more $CHILL</i>
                  <br />
                  Start playing SOL Arena today by going to{" "}
                  <a
                    href="http://play.solarena.io/"
                    target="_blank"
                    className=" underline"
                  >
                    solarena.io
                  </a>
                  . Collect and extract noCHILL to climb the leaderboard and
                  qualify for the $CHILL airdrop when the token launches.
                </div>
                <div className=" mt-3 mb-6">
                  <Image
                    src={"/assets/chill/Gk4hWrqWcAAmPSo.jpg"}
                    alt=""
                    width={1920}
                    height={1080}
                  />
                </div>

                <h4 className=" font-bold text-[18px] text-[#ffffff] pb-4">
                  How To Get noCHILL?
                </h4>
                <ul className=" list-decimal pl-5 space-y-6">
                  <li>
                    <b>Enter the Arena & Extract noCHILL</b>
                    <ul className=" list-disc pl-5">
                      <li>
                        <b>Enter the Arena</b> - Join the Arena and compete
                        against other players in real time.
                      </li>
                      <li>
                        <b>Collect noCHILL</b> - Gather noCHILL in the Arena and
                        defeat opponents to take theirs.
                      </li>
                      <li>
                        <b>Extract to Secure noCHILL</b> - Escape through a
                        wormhole to lock in your noCHILL. Die before you extract
                        and you’ll drop it for others to steal.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Refer your Friends</b>
                    <ul className=" list-disc pl-5">
                      <li>
                        Refer your friends and earn a 5% bonus on all their
                        noCHILL extractions!
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Daily Claims</b>
                    <ul className=" list-disc pl-5">
                      <li>
                        Log in daily to claim rewards, with each consecutive day
                        increasing the value of your noCHILL claim.
                      </li>
                      <li>On Day 7, you receive the biggest reward.</li>
                      <li>Missing a day resets your streak.</li>
                    </ul>
                  </li>
                  <li>
                    <b>Redemption Codes</b>
                    <ul className=" list-disc pl-5">
                      <li>
                        Stay active on Discord, Telegram, or X to earn exclusive
                        redemption codes. These codes grant extra noCHILL, which
                        you can redeem in-game for additional rewards.
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className=" mt-3 mb-6">
                  <Image
                    src={"/assets/chill/250207_SA_GetnoCHILLinTheArena.webp"}
                    alt=""
                    width={1920}
                    height={1080}
                  />
                </div>

                <h4 className=" font-bold text-[18px] text-[#ffffff] pb-4">
                  noCHILL = $CHILL Eligibility
                </h4>
                <div className="text-[16px] space-y-8">
                  To qualify for the noCHILL = $CHILL airdrop, players must
                  extract at least 25,000 noCHILL from the Arena. Once this
                  requirement is met, NFT multipliers will be applied, and
                  noCHILL earned through referrals, daily claims and redemption
                  codes will also count toward the $CHILL airdrop.
                </div>
                <div className=" mt-3 mb-6">
                  <Image
                    src={"/assets/chill/250210_SA_EligibilityCriteria.webp"}
                    alt=""
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>
            <div className=" -mt-[110px] pt-[80px] pl-5 flex flex-col gap-12 px-[20px]" id="Hold-our-NFTs">
              <div className=" flex flex-col gap-6">
                <h3 className=" text-[18px] text-[#41FFC6]">Hold our NFTs</h3>
                <div className=" text-[16px] space-y-8">
                  Own a piece of SOL Arena by holding either{" "}
                  <a
                    href="https://magiceden.io/marketplace/chillchat"
                    target="_blank"
                    className=" underline"
                  >
                    Chillchat Origin
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://magiceden.io/marketplace/sol_arena_challengers"
                    target="_blank"
                    className=" underline"
                  >
                    SOL Arena Challengers
                  </a>{" "}
                  NFTs. These NFTs not only grant exclusive in-game cosmetics
                  but also guarantee your eligibility for the $CHILL airdrop.
                </div>
                <ul className=" list-decimal pl-5 space-y-6">
                  <li>
                    <a
                      href="https://magiceden.io/marketplace/chillchat"
                      target="_blank"
                      className=" underline"
                    >
                      Chillchat Origins
                    </a>
                    <ul className=" list-disc pl-5">
                      <li>Earn $CHILL airdrop rewards.</li>
                      <li>Hard stake to earn exclusive in-game currencies.</li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="https://magiceden.io/launchpad/sol_arena_challengers"
                      target="_blank"
                      className=" underline"
                    >
                      SOL Arena Challengers
                    </a>
                    <ul className=" list-disc pl-5">
                      <li>Playable in-game as a limited time cosmetic.</li>
                      <li>Earn $CHILL airdrop rewards.</li>
                      <li>Multiply your noCHILL extractions.</li>
                    </ul>
                  </li>
                </ul>

                <h4 className=" font-bold text-[18px] text-[#ffffff]">
                  noCHILL Multiplier Table
                </h4>
                <div className=" -mt-[18px] mb-6">
                  <Image
                    src={"/assets/chill/250211_SA_-NFTRewardsV2.webp"}
                    alt=""
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
              <div className=" -mt-[110px] pt-[80px] flex flex-col gap-6" id="TaskOn-Questing">
                <h3 className=" text-[18px] text-[#41FFC6]">TaskOn Questing</h3>
                <div className=" text-[16px]">
                  In addition to collecting noCHILL in the Arena, players can
                  complete additional quests on SOL Arena’s TaskOn Quest Board
                  in order to earn more points towards their $CHILL Airdrop
                  allocation.
                </div>
                <div className=" text-[16px] space-y-8">
                  <a
                    href="https://taskon.xyz/SOLArena"
                    target="_blank"
                    className=" underline"
                  >
                    TaskOn Quest Board
                  </a>
                </div>
                <div className=" -mt-[18px] mb-6">
                  <Image
                    src={"/assets/chill/image-era.webp"}
                    alt=""
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
              <div className=" -mt-[110px] pt-[80px] flex flex-col gap-6" id="Discord-Daily-Quests">
                <h3 className=" text-[18px] text-[#41FFC6]">
                  Discord Daily Quests
                </h3>
                <div className=" text-[16px] space-y-8">
                  Besides the Arena and TaskOn Quests, players can farm for the
                  $CHILL airdrop within the Chillchat Games community Discord
                  server.
                </div>
                <ul className="list-disc pl-5">
                  <li>Complete quests in the #Quests channel</li>
                  <li>Claim daily points in the #Lootbox channel</li>
                  <li>
                    Earn <b>Eva Points</b>: points system specifically for{" "}
                    <b>Discord Quests</b>. More Eva Points earned will result in
                    a larger airdrop allocation.
                  </li>
                </ul>
                <div className=" text-[16px] space-y-8">
                  <a
                    href="https://discord.gg/chillchatgames"
                    target="_blank"
                    className=" underline"
                  >
                    Join the Discord
                  </a>
                </div>
                <div className=" -mt-[18px] mb-6">
                  <Image
                    src={"/assets/chill/image-pro.webp"}
                    alt=""
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
              <div className=" -mt-[110px] pt-[80px] flex flex-col gap-6" id="Buy-$CHILL-at-Launch">
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
                <ul className="list-disc pl-5">
                  <li>Contract Address: TBC</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-[1000px] m-auto -mt-[70px] pt-[110px] text-white flex flex-col gap-12 relative z-20" id="SNAPSHOT-DATE-26th-March-2025">
            <div className="relative h-fit">
              <Image
                src={"/assets/chill/Section2Title.png"}
                alt=""
                width={700}
                height={200}
                className=" w-[555px] h-[68px]"
              />
              <div className="  absolute top-[50%] left-7 translate-y-[-50%] text-black md:text-[28px] text-[20px] font-semibold">
                SNAPSHOT DATE: 26th March 2025
              </div>
            </div>
            <div className=" px-5 flex flex-col gap-6">
              <div className="text-[18px] italic">
                On this date, we will record all holders of both Collections and
                submit the list to Streamflow for when the $CHILL claim website
                goes live.
              </div>
              <div>
                <h3 className=" text-[18px] text-[#41FFC6] pb-4">
                  Snapshot Details
                </h3>
                <ul className="list-decimal pl-5 ">
                  <li>
                    <b>NFT Holders:</b>
                    <ul className="list-disc pl-5">
                      <li>
                        We will record all holders of <b>Chillchat Origin</b>{" "}
                        and <b>SOL Arena Challengers</b> NFTs.
                      </li>
                      <li>
                        The list will be submitted to <b>Streamflow</b> for when
                        the <b>$CHILL claim website</b> goes live.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    <b>Future Utility of NFTs:</b>
                    <ul className="list-disc pl-5">
                      <li>
                        <b>Chillchat Origins</b> will become{" "}
                        <b>purely collectibles</b>, with no further utility
                        after the snapshot.
                      </li>
                      <li>
                        <b>SOL Arena Challengers</b> will be{" "}
                        <b>limited to in-game cosmetics</b>, with no further
                        rewards.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    <b>noCHILL Balances & Multipliers:</b>
                    <ul className="list-disc pl-5">
                      <li>
                        We will record <b>each player’s noCHILL balance</b> and
                        apply their respective NFT <b>multipliers</b>.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    <b>TaskOn & Discord Daily Quest Snapshots:</b>
                    <ul className="list-disc pl-5">
                      <li>
                        A final snapshot will be taken for{" "}
                        <b>TaskOn quest points</b> and{" "}
                        <b>Discord Daily Quest EVA points</b> to determine
                        airdrop distribution.
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="text-[18px] mt-4">
                  This snapshot marks the definitive cutoff for eligibility and
                  multipliers, ensuring that all rewards are accurately assigned
                  before the launch of the $CHILL claim process.
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
        <div className=" w-full relative py-[100px] -mt-[150px] md:-mt-[130px] md:py-[90px]" id="Links">
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
                <div className=" text-[#41FFC6] text-[18px]">Discord</div>
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
                <div className=" text-[#41FFC6] text-[18px] ">X</div>
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
                <div className=" text-[#41FFC6] text-[18px]">Telegram</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightContent;
