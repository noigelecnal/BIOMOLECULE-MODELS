document.addEventListener("DOMContentLoaded", function () {
    if (typeof NGL === "undefined") {
        console.error("epic ngl fail");
        return;
    }

    const moleculeViewer = document.getElementById("molecule-viewer");
    const moleculeTitle = document.getElementById("molecule-title");
    const moleculeDescription = document.getElementById("molecule-description");

  
    moleculeViewer.style.display = "none";


    
    const stage = new NGL.Stage("molecule-viewer");

    function loadMolecule(type) {
        let moleculeFile = "";
        let title = "";
        let description = "";

        switch (type) {
            case "carbohydrate":
                moleculeFile = "https://files.rcsb.org/download/2kqo.pdb"; // pati ito
                title = "Carbohydrates";
                description = "Exist in ring or linear forms, with glycosidic linkages connecting monosaccharides.";
                break;
            case "lipid":
                moleculeFile = "https://files.rcsb.org/ligands/download/TGL.cif"; //correct daw sabe
                title = "Lipids";
                description = "Triglycerides are the main form of fat storage in the body, consisting of glycerol and three fatty acid chains. They serve as a major energy source and are stored in adipose tissue.";
                break;
            case "nucleic_acid":
                moleculeFile = "https://files.rcsb.org/download/1bna.pdb"; // ts pmo
                title = "Nucleic Acids";
                description = "DNA adopts a double-helix, RNA forms varied structures.";
                break;
            case "protein":
                moleculeFile = "https://files.rcsb.org/download/2gtb.pdb"; // ang lag 
                title = "Proteins";
                description = "Fold into complex structures, stabilized by hydrogen bonds and interactions.";
                break;
            default:
                return;
        }

        
        moleculeViewer.style.display = "block";

      
        moleculeTitle.textContent = title;
        moleculeDescription.textContent = description;

        
        stage.removeAllComponents();

     
        stage.loadFile(moleculeFile, { defaultRepresentation: true })
            .then(function (component) {
                component.autoView();
            })
            .catch(function (error) {
                console.error("epic molecule loading fail ", error);
            });

        
        setTimeout(() => {
            stage.handleResize();
        }, 500);
    }
<script src="script.js"></script> 
  
    document.getElementById("carbohydrate-btn").addEventListener("click", function () {
        loadMolecule("carbohydrate");
    });

    document.getElementById("lipid-btn").addEventListener("click", function () {
        loadMolecule("lipid");
    });

    document.getElementById("nucleic-acid-btn").addEventListener("click", function () {
        loadMolecule("nucleic_acid");
    });

    document.getElementById("protein-btn").addEventListener("click", function () {
        loadMolecule("protein");
    });

});
