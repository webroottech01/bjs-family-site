import styled from "styled-components";
import { motion } from "framer-motion";

const TextArea = styled(motion.textarea)`
  width: 100%;
  height: 500px;
  padding: 40px;
  border: 1px solid #918e88;
  border-radius: 6px;
  resize: none;
`;

export default TextArea;
