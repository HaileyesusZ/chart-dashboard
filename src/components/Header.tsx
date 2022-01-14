import TextSizes from "../constants/ui/TextSizes"
import StyledHeader from "../styled/StyledHeader.style"
import StyledText from "../styled/StyledText.style"

const Header: React.FC = () => {
    return <StyledHeader>
        <StyledText size={TextSizes.medium}> 
            <h1>Monitoring &amp; Performance</h1>
         </StyledText>
    </StyledHeader>
}

export default Header
