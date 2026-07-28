import React from 'react'
import Section from '../Section/Section'
import AssessmentCard from '../../molecules/AssessmentCard/AssessmentCard'
import { MotionBox } from '../../motion'
import { staggerContainer, staggerItem } from '../../../hooks/useScrollAnimation'
import type { AssessmentCardsBlockProps } from './AssessmentCardsBlock.types'
import { styles } from './AssessmentCardsBlock.styles'

const AssessmentCardsBlock = React.memo(function AssessmentCardsBlock({ section }: AssessmentCardsBlockProps) {
    return (
        <Section id={section.id} title={section.title} subtitle={section.subtitle} tone="alt">
            <MotionBox
                sx={styles.grid}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {section.items.map((data) => (
                    <MotionBox key={data.to} variants={staggerItem} sx={styles.item}>
                        <AssessmentCard data={data} />
                    </MotionBox>
                ))}
            </MotionBox>
        </Section>
    )
})

export default AssessmentCardsBlock
