import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import "./Faq.scss";

function Faq({ faq }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      slotProps={{ transition: { timeout: 600 } }}
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}>
      <AccordionSummary className='panel' expandIcon={<ExpandMoreIcon />}>
        <Typography
          sx={{ width: "90%", flexShrink: 0 }}
          variant='h4'
          component='h4'>
          {faq.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{faq.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Faq;
