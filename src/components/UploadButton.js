import React from 'react';

// Styled Components
import { StyledUploadButton } from './styles/StyledUploadButton';

export default function UploadButton({ callback }) {
    return (
        <StyledUploadButton>
        <div className="form-group row">
        <div className="offset-4 col-8">
        <button name="submit" type="submit" className="btn btn-primary">
            Submit
        </button>
        </div>
        </div>
        </StyledUploadButton>
    )
}
