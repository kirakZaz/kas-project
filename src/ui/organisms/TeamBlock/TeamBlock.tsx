import React from 'react'
import Section from '../Section/Section'
import TeamCard from '../../molecules/TeamCard/TeamCard'
import { MotionBox } from '../../motion'
import { staggerContainer, staggerItem } from '../../../hooks/useScrollAnimation'
import type { TeamBlockProps } from './TeamBlock.types'
import { styles } from './TeamBlock.styles'

const TeamBlock = React.memo(function TeamBlock({ section }: TeamBlockProps) {
    return (
        <Section id={section.id} title={section.title ?? 'Team'} subtitle={section.subtitle} tone="alt">
            <MotionBox
                sx={styles.grid}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {section.members.map((member) => (
                    <MotionBox key={member.name} variants={staggerItem} sx={styles.item}>
                        <TeamCard member={member} />
                    </MotionBox>
                ))}
            </MotionBox>
        </Section>
    )
})

export default TeamBlock
