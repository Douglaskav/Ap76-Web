import { ArrowRight } from "phosphor-react";
import { HowItWorksSectionContent } from "../../../../content/index";

export function HowItWorks() {
  return (
    <div className="mt-16 md:mt-[120px]">
      <h2 className="text-3xl md:text-4xl font-medium text-[#222] text-center">
        Como isto funciona ?
      </h2>
      <ul className="flex flex-col md:flex-row justify-center items-center mt-8">
        {HowItWorksSectionContent.map((section, index) => {
          return (
            <li
              className="w-72 h-72 border rounded-md p-4 m-2 flex flex-col items-center justify-center"
              key={section.title}
            >
              <div
                className={`w-16 h-16 rounded-full bg-primary-${section.bgColor} flex justify-center items-center`}
              >
                <span className="font-bold text-[#FFF] text-xl">
                  {index + 1}
                </span>
              </div>
              <h4 className="text-lg font-medium text-center max-w-[95%] text-logo_color-500 mt-5">
                {section.title}
              </h4>
              <p className="text-sm text-desc-300 max-w-[95%] text-center mb-4 mt-1">
                {section.explanation}
              </p>
              <a
                href={section.goTo}
                className="text-secondary-500 text-xs flex items-center"
              >
                Ver mais <ArrowRight weight="bold" className="ml-1" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
