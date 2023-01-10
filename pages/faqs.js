import { useState } from "react";
import Button from "../components/Button";
import styles from "../styles/Faqs.module.css";
import Banner from "../components/Banner";
import Head from 'next/head'
import Coming from '../components/LandingPage/Coming'

const questions = [
  {
    question: "How do I register for FOSS Meet 2022-23?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    question: "How do I register for FOSS Meet 2022-23?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    question: "How do I register for FOSS Meet 2022-23?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    question: "How do I register for FOSS Meet 2022-23?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    question: "How do I register for FOSS Meet 2022-23?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
];

export default function faqs() {
  return (
    <div>
      {/* <Coming/> */}
      <Banner
        image="workshop-details-banner.png"
        title="Frequently Asked Questions"
        subtitle="Quick Support"
      />
      <div className="margin">
        <div className={styles["content-wrapper"]}>
          <HaveAnyQuestions />
          <div className={styles["questions-wrapper"]}>
            {questions.map((q, index) => (
              <Question key={index} question={q.question} answer={q.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HaveAnyQuestions() {
  return (
    <div className={styles["have-any-questions"]}>
      <h2>Have Any Questions?</h2>
      <p>
        Feel free to reach out to us and we will get back to you immediately
      </p>
      <Button text="Contact Us" toLink="/contact" />
    </div>
  );
}

function Question({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles["question"]}>
      <div
        className={styles["question-heading-wrapper"]}
        onClick={() => setOpen((curr) => !curr)}
      >
        <h4>{question}</h4>
        <img
          className={`${styles["faq-drop-icon"]} ${
            open ? styles["up-down"] : ""
          }`}
          src="/icons/chevron-down.svg"
        />
      </div>
      {open && <p>{answer}</p>}
    </div>
  );
}
