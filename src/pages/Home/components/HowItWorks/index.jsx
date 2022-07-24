import { ArrowRight } from "phosphor-react";
import { HowItWorksSectionContent } from "../../../../content/howItWorks.js";
import "./styles.css";

export function HowItWorks() {
  return (
    <div className="container">
      <h2 className="section-title">Como isto funciona ?</h2>
      <ul className="howitworks-section-container">
        {HowItWorksSectionContent.map((section, index) => {
          return (
            <li className="howitworks-item" key={section.title}>
              <div
                className="howitworks-circle"
                style={{ backgroundColor: section.bgColor }}
              >
                <span className="font-bold text-[#FFF] text-xl">
                  {index + 1}
                </span>
              </div>
              <h4 className="howitworks-info-title">{section.title}</h4>
              <p className="howitworks-info-explanation">
                {section.explanation}
              </p>
              <a href={section.goTo} className="howitworks-link">
                Ver mais <ArrowRight weight="bold" className="ml-1" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
