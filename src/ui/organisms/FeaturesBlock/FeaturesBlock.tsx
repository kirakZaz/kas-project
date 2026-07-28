import React from 'react'
import Section from '../Section/Section'
import FeatureCard from '../../molecules/FeatureCard/FeatureCard'
import { MotionBox } from '../../motion'
import { staggerContainer, staggerItem } from '../../../hooks/useScrollAnimation'
import type { FeaturesBlockProps } from './FeaturesBlock.types'
import { styles } from './FeaturesBlock.styles'

const FeaturesBlock = React.memo(function FeaturesBlock({ section }: FeaturesBlockProps) {
    const cols = section.columns ?? Math.min(section.items.length, 3)
    return (
        <Section id={section.id} title={section.title} subtitle={section.subtitle}>
            <MotionBox
                sx={styles.grid(cols)}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {section.items.map((item) => (
                    <MotionBox key={item.title} variants={staggerItem} sx={styles.item}>
                        <FeatureCard item={item} />
                    </MotionBox>
                ))}
            </MotionBox>
        </Section>
    )
})

export default FeaturesBlock
