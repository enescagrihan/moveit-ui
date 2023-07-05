import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'

import {
    compose,
    color,
    width,
} from 'styled-system'

const Logo = styled(View)(
    {
        borderRadius: 50,
    },
    color,
    width,

)

export const LogoSmall = styled(Logo)({ width: 50, height: 50, backgroundColor: 'gray' })