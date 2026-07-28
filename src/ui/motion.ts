import { motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'

// Shared motion-wrapped primitives, created once and reused everywhere so no
// component has to declare its own local `motion.create(...)` constant.
export const MotionBox = motion.create(Box)
export const MotionTypography = motion.create(Typography)
