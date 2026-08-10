import chefOne from "../../../assets/images/chef-1.png";
import chefTwo from "../../../assets/images/chef-2.png";
import chefThree from "../../../assets/images/chef-3.png";
import checker from "../../../assets/images/checker.svg";

const chefs = [
  {
    name: "Dong Zhenqiang",
    role: "SOUS CHEF",
    image: chefOne,
  },
  {
    name: "Eileen Yin-Fei Lo",
    role: "HEAD CHEF",
    image: chefTwo,
  },
  {
    name: "Zhang Liang",
    role: "SOMMELIER",
    image: chefThree,
  },
];

const AboutTeam = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#CA2F06] text-white">
        {/* Team content */}
        <div className="py-24 md:py-28">
          {/* Heading */}
          <div className="mx-auto max-w-2xl px-6 text-center">
            <span className="text-[10px] font-medium uppercase">
              <span className="mr-1">⊙</span>
              Team
            </span>

            <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              Passion on Every Plate:
              <br />
              Meet <span className="font-serif italic">Our Dream Team.</span>
            </h2>
          </div>

          {/* Team cards */}
          <div className="mt-16 overflow-hidden">
            <div className="flex min-w-max items-start justify-center gap-3 px-8 md:gap-3 md:px-0">
              {/* Chef 1 */}
              <div className="w-[280px] shrink-0 md:w-[280px]">
                <div className="overflow-hidden rounded-[14px]">
                  <img
                    src={chefOne}
                    alt={chefs[0].name}
                    className="h-[310px] w-full object-cover"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="font-serif text-xl italic">{chefs[0].name}</h3>

                  <p className="mt-1 text-[10px] font-medium uppercase">
                    {chefs[0].role}
                  </p>
                </div>
              </div>

              {/* Chef 2 - raised name, lowered image */}
              <div className="w-[280px] shrink-0 pt-0 md:w-[280px]">
                {/* Name appears above image */}
                <div className="mb-6">
                  <h3 className="font-serif text-xl italic">{chefs[1].name}</h3>

                  <p className="mt-1 text-[10px] font-medium uppercase">
                    {chefs[1].role}
                  </p>
                </div>

                <div className="overflow-hidden rounded-[14px]">
                  <img
                    src={chefTwo}
                    alt={chefs[1].name}
                    className="h-[310px] w-full object-cover"
                  />
                </div>
              </div>

              {/* Chef 3 */}
              <div className="w-[280px] shrink-0 md:w-[280px]">
                <div className="mb-6">
                  <h3 className="font-serif text-xl italic">{chefs[2].name}</h3>

                  <p className="mt-1 text-[10px] font-medium uppercase">
                    {chefs[2].role}
                  </p>
                </div>

                <div className="overflow-hidden rounded-[14px]">
                  <img
                    src={chefThree}
                    alt={chefs[2].name}
                    className="h-[310px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Checker at bottom */}
      <img src={checker} alt="" className="block h-auto w-full -mb-1" />
    </>
  );
};

export default AboutTeam;
