$(document).ready(function () {
    $(".project-thumbnail").click(function () {
        var projectId = $(this).closest('.project').data('project-id');
        var projectDetails = getProjectDetails(projectId);
        $("#modalContent").html(projectDetails);
        $("#projectModal").fadeIn();
    });

    $(document).on('click', '.close', function () {
        closeModal();
    });

    $(document).on('click', function (event) {
        if ($(event.target).is("#projectModal")) {
            closeModal();
        }
    });

    function getProjectDetails(projectId) {
        switch (projectId) {
            case "project1":
                return "<h2>Project 1 Details</h2><p>Additional details about Project 1.</p>";
            case "project2":
                return "<h2>Project 2 Details</h2><p>Additional details about Project 2.</p>";
            case "project3":
                return "<h2>Project 3 Details</h2><p>Additional details about Project 3.</p>";
            default:
                return "<p>No details available.</p>";
        }
    }

    function closeModal() {
        $("#projectModal").fadeOut();
    }
});
