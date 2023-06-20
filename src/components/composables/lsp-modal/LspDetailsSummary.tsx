import { useLspDetailsStore } from "@lms/utilities/stores/lsp-details-store";
import { FunctionComponent } from "react";

export const LspDetailsSummary: FunctionComponent = () => {
  const {
    employeeId,
    firstName,
    middleName,
    lastName,
    contactNumber,
    email,
    postalAddress,
    experience,
    trainingSource,
    photoUrl,
    expertise,
    affiliations,
    awards,
    certifications,
    coaching,
    education,
    projects,
    trainings,
  } = useLspDetailsStore();

  return (
    <div>
      <p>{employeeId}</p>
      <p>{firstName}</p>
      <p>{middleName}</p>
      <p>{lastName}</p>
      <p>{contactNumber}</p>
      <p>{email}</p>
      <p>{postalAddress}</p>
      <p>{trainingSource}</p>
      <p>{photoUrl}</p>
      <p>{experience}</p>
      <ul>
        {expertise.map((item, index) => (
          <li key={index}>{item.subjectMatter}</li>
        ))}
      </ul>
      <ul>
        {affiliations.map((item, index) => (
          <li key={index}>
            <h3>{item.position}</h3>
            <p>{item.institution}</p>
          </li>
        ))}
      </ul>
      <ul>
        {awards.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <ul>
        {certifications.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <ul>
        {coaching.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <ul>
        {education.map((item, index) => (
          <li key={index}>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
          </li>
        ))}
      </ul>
      <ul>
        {projects.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <ul>
        {trainings.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
